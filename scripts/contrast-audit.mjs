import fs from "node:fs";
import path from "node:path";

const cssPath = path.resolve("app/globals.css");
const css = fs.readFileSync(cssPath, "utf8");

function getBlock(startMarker) {
  const start = css.indexOf(startMarker);
  if (start === -1) return "";
  const braceStart = css.indexOf("{", start);
  let depth = 0;
  for (let i = braceStart; i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}") depth--;
    if (depth === 0) return css.slice(braceStart + 1, i);
  }
  return "";
}

function parseOklch(raw) {
  const parts = raw.trim().split(/\s+/);
  if (parts.length < 3) throw new Error(`Invalid oklch: ${raw}`);
  const L = parts[0].endsWith("%") ? Number(parts[0].replace("%", "")) / 100 : Number(parts[0]);
  const C = Number(parts[1]);
  const H = Number(parts[2]);
  return { L, C, H };
}

function oklchToSrgb(oklch) {
  const hRad = (oklch.H * Math.PI) / 180;
  const a = oklch.C * Math.cos(hRad);
  const b = oklch.C * Math.sin(hRad);

  const l_ = oklch.L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = oklch.L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = oklch.L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let b2 = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  r = Math.min(1, Math.max(0, r));
  g = Math.min(1, Math.max(0, g));
  b2 = Math.min(1, Math.max(0, b2));

  return { r, g, b: b2 };
}

function luminance(rgb) {
  return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
}

function contrastRatio(c1, c2) {
  const l1 = luminance(c1);
  const l2 = luminance(c2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function extractTokens(blockText) {
  const out = {};
  const regex = /--([\w-]+):\s*oklch\(([^)]+)\);/g;
  let m;
  while ((m = regex.exec(blockText)) !== null) {
    out[m[1]] = parseOklch(m[2]);
  }
  return out;
}

const rootTokens = extractTokens(getBlock(":root"));
const darkTokens = extractTokens(getBlock("\n.dark"));

const checks = [
  ["foreground", "background", 4.5, "text"],
  ["card-foreground", "card", 4.5, "text"],
  ["popover-foreground", "popover", 4.5, "text"],
  ["secondary-foreground", "secondary", 4.5, "text"],
  ["muted-foreground", "muted", 4.5, "text"],
  ["primary-foreground", "primary", 4.5, "text"],
  ["destructive-foreground", "destructive", 4.5, "text"],
  ["ring", "background", 3.0, "ui"],
  ["border", "background", 3.0, "ui"],
];

function runTheme(name, tokens) {
  console.log(`\nTheme: ${name}`);
  const failures = [];
  for (const [fg, bg, min, type] of checks) {
    const c1 = tokens[fg];
    const c2 = tokens[bg];
    if (!c1 || !c2) continue;
    const ratio = contrastRatio(oklchToSrgb(c1), oklchToSrgb(c2));
    const pass = ratio >= min;
    const mark = pass ? "PASS" : "FAIL";
    console.log(`${mark} ${fg} on ${bg} (${type}) = ${ratio.toFixed(2)}:1 (min ${min}:1)`);
    if (!pass) failures.push({ fg, bg, ratio, min });
  }
  return failures;
}

const lightFailures = runTheme("light", rootTokens);
const darkFailures = runTheme("dark", darkTokens);

const allFailures = [...lightFailures.map((f) => ({ ...f, theme: "light" })), ...darkFailures.map((f) => ({ ...f, theme: "dark" }))];

console.log("\nSummary:");
if (allFailures.length === 0) {
  console.log("All checked token pairs pass the selected WCAG thresholds.");
} else {
  for (const f of allFailures) {
    console.log(`- ${f.theme}: ${f.fg} on ${f.bg} = ${f.ratio.toFixed(2)}:1 (needs ${f.min}:1)`);
  }
  process.exitCode = 2;
}

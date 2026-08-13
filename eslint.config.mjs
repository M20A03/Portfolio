import nextConfig from "eslint-config-next";

export default [
  ...(Array.isArray(nextConfig) ? nextConfig : [nextConfig]),
  {
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

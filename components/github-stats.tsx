"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, BookMarked, Code2 } from "lucide-react";

interface StatCardProps {
    label: string;
    value: string | number;
    icon: any;
    color: string;
}

function StatItem({ label, value, icon: Icon, color }: StatCardProps) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 group/item">
            <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-white shadow-sm group-hover/item:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
            </div>
            <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
                <p className="text-sm font-black text-foreground">{value}</p>
            </div>
        </div>
    );
}

export function GitHubStatsCard() {
    const languages = [
        { name: "HTML", percent: 45, color: "bg-orange-500" },
        { name: "JavaScript", percent: 30, color: "bg-yellow-400" },
        { name: "TypeScript", percent: 20, color: "bg-blue-500" },
        { name: "Others", percent: 5, color: "bg-muted-foreground" },
    ];

    return (
        <div className="w-full grid md:grid-cols-2 gap-6">
            {/* Real Stats Card */}
            <div className="p-6 rounded-3xl bg-background/40 border border-border/50 backdrop-blur-md shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Github className="w-24 h-24" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        <Github className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-black text-foreground">GitHub Profile</h4>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">@M20A03</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <StatItem label="Stars" value="0" icon={Star} color="bg-amber-400" />
                    <StatItem label="Repositories" value="8" icon={BookMarked} color="bg-blue-500" />
                    <StatItem label="Followers" value="7" icon={Users} color="bg-purple-500" />
                    <StatItem label="Contributions" value="55" icon={GitFork} color="bg-emerald-500" />
                </div>
            </div>

            {/* Top Languages Card */}
            <div className="p-6 rounded-3xl bg-background/40 border border-border/50 backdrop-blur-md shadow-xl relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-black text-foreground">Top Languages</h4>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Usage Analysis</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {languages.map((lang) => (
                        <div key={lang.name} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-bold">
                                <span className="text-muted-foreground">{lang.name}</span>
                                <span className="text-foreground">{lang.percent}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percent}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full ${lang.color} rounded-full`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

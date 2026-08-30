"use client";

import { motion } from "framer-motion";
import { Terminal, Home, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main id="main-content" className="min-h-screen bg-background flex items-center justify-center px-6 overflow-hidden relative">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="inline-flex items-center justify-center p-6 rounded-3xl bg-primary/10 mb-8 border border-primary/20"
                >
                    <Terminal className="w-16 h-16 text-primary" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-8xl md:text-9xl font-black text-foreground mb-4 tracking-tighter">
                        4<span className="text-primary truncate">0</span>4
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Lost in the <span className="text-primary italic">Source Code?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been refactored into oblivion.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button size="lg" className="gap-2 px-8 h-12 text-base font-bold rounded-2xl">
                                <Home className="w-5 h-5" />
                                Back to Safety
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-0 right-0 opacity-20 hidden md:block"
                >
                    <Construction className="w-24 h-24 text-primary" />
                </motion.div>
            </div>
        </main>
    );
}

"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <main id="main-content" className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
            <div className="relative">
                {/* Animated Brand Logo/Indicator */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-black text-foreground"
                >
                    MRG<span className="text-primary animate-pulse">.</span>
                </motion.div>

                {/* Loading Ring */}
                <div className="absolute inset-0 -m-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-full border-4 border-transparent border-t-primary rounded-full blur-[1px]"
                    />
                </div>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
                >
                    Initializing Experience
                    <span className="inline-flex w-8 text-left ml-1">...</span>
                </motion.p>
            </div>
        </main>
    );
}

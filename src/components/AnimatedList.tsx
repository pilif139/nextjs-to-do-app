"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedList({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence>
            {children}
        </AnimatePresence>
    )
}

export function ListElement({ children, id }: { id: number, children: React.ReactNode }) {
    return (
        <motion.li
            key={id}
            initial={{ opacity: 0, scale: 0.7, x: -120 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 * (id + 1) }}
        >
            {children}
        </motion.li>
    )
}
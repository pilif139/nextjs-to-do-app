"use client";

import { ReactNode } from "react";
import { motion as m } from "framer-motion";

export default function Heading({ children }: { children: ReactNode }) {
    return (
        <m.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold">{children}</m.h1>
    );
}
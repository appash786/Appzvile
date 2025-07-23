// src/components/LenisProvider.tsx
"use client";

import { ReactNode } from "react";
import useLenis from "@/Hooks/useLenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
    useLenis();
    return <>{children}</>;
}

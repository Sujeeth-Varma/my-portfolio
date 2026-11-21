"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";

export default function PageIntro({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

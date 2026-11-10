"use client";

import { MotionConfig } from "framer-motion";

// Desliga animações de transformação do Framer Motion quando o sistema pede menos movimento.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

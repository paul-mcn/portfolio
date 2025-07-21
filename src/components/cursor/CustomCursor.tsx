"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useGlobalStore } from "@/providers/GlobalStoreProvider";

const CustomCursor = ({ children }: { children: React.ReactNode }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorVariant = useGlobalStore((state) => state.cursorVariant);
  const cursorVariantSize = useGlobalStore((state) => state.cursorVariantSize);

  useEffect(() => {
    const cursorMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", cursorMove);
    return () => {
      document.removeEventListener("mousemove", cursorMove);
    };
  }, []);

  return (
    // <div className="relative">
    <div className="relative *:cursor-none">
      <motion.div
        className="fixed z-50 bg-white rounded-full duration-100 ease-out pointer-events-none transition-all"
        variants={{
          default: {
            width: cursorVariantSize.default,
            height: cursorVariantSize.default,
            x: cursorPosition.x - cursorVariantSize.default / 2,
            y: cursorPosition.y - cursorVariantSize.default / 2,
            background: "oklch(1 0 0)", // white
						boxShadow: "10px 10px 40px 40px oklch(0 0 0) inset",
            // mixBlendMode: "hue",
            transition: {
              type: "smooth",
              duration: 0,
            },
          },
          text: {
            height: cursorVariantSize.text,
            width: cursorVariantSize.text,
            x: cursorPosition.x - cursorVariantSize.text / 2,
            y: cursorPosition.y - cursorVariantSize.text / 2,
            // background: colors.slate[950],
            // background: "oklch(0.968 0.007 247.896)",
            // background: "white",
            background: "oklch(1 0 0)", // white
            mixBlendMode: "color-burn",
            // mixBlendMode: "difference",
						// border: "white 40px solid",
						boxShadow: "10px 10px 40px 40px oklch(0 0 0) inset",
            transition: {
              type: "smooth",
              duration: 0,
            },
          },
        }}
        animate={cursorVariant}
      />
      {children}
    </div>
  );
};

export default CustomCursor;

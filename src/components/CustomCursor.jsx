import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        setIsVisible(true);

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-accent-DEFAULT rounded-full pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-accent-emerald rounded-full pointer-events-none z-[99] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    borderColor: isHovering ? "#D946EF" : "#06B6D4",
                    backgroundColor: isHovering ? "rgba(217, 70, 239, 0.1)" : "transparent"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;

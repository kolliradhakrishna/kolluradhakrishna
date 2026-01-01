import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollLayout = ({ children, currentPage, onPageChange }) => {
    const [direction, setDirection] = useState(0); // 1 = down, -1 = up
    const [isAnimating, setIsAnimating] = useState(false);
    const sections = React.Children.toArray(children);
    const touchStartY = useRef(0);

    // Sync internal direction when prop changes
    useEffect(() => {
        // If we receive a new page that is different, we need to animate
        // But verify if we are already there to avoid loop
    }, [currentPage]);

    const changePage = (newIndex) => {
        if (newIndex >= 0 && newIndex < sections.length && !isAnimating && newIndex !== currentPage) {
            setDirection(newIndex > currentPage ? 1 : -1);
            setIsAnimating(true);
            onPageChange(newIndex);
        }
    };

    useEffect(() => {
        const handleWheel = (e) => {
            if (isAnimating) return;

            if (e.deltaY > 0) {
                changePage(currentPage + 1);
            } else {
                changePage(currentPage - 1);
            }
        };

        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            if (isAnimating) return;

            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY.current - touchEndY;

            if (Math.abs(diff) > 50) { // Threshold
                if (diff > 0) {
                    changePage(currentPage + 1);
                } else if (diff < 0) {
                    changePage(currentPage - 1);
                }
            }
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentPage, isAnimating, sections.length, onPageChange]);

    const onAnimationComplete = () => {
        setIsAnimating(false);
    };

    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    const variants = {
        enter: (direction) => ({
            y: direction > 0 ? '100%' : '-100%',
            opacity: 1,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            y: direction > 0 ? '-100%' : '100%',
            opacity: 1, // Keep opacity to create overlapping/reveal effect
        }),
    };

    return (
        <div className="h-screen w-full overflow-hidden relative bg-primary text-white">
            {/* Navigation Indicators */}
            <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
                {sections.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => changePage(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentPage ? 'bg-accent-emerald scale-125' : 'bg-white/20 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            <AnimatePresence initial={false} custom={direction} mode="popLayout" onExitComplete={onAnimationComplete}>
                <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                    className="absolute inset-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-accent-DEFAULT/20 scrollbar-track-transparent">
                        {/* Internal container to ensure content centering or scrolling */}
                        <div className="min-h-full flex flex-col justify-center">
                            {sections[currentPage]}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ScrollLayout;

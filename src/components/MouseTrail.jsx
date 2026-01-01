import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, Globe, Zap, Database, Server, Hash, Braces, Terminal } from "lucide-react";

const icons = [Code, Cpu, Globe, Zap, Database, Server, Hash, Braces, Terminal];
const colors = ["#6366F1", "#10B981", "#FFFFFF", "#38BDF8", "#A855F7"]; // Indigo, Emerald, White, Sky, Purple

const MouseTrail = () => {
    const [trail, setTrail] = useState([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const requestRef = useRef();

    // Threshold distance to spawn a new particle
    const DISTANCE_THRESHOLD = 50;

    const handleMouseMove = useCallback((e) => {
        const { clientX, clientY } = e;

        // Calculate distance from last spawn
        const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);

        if (dist > DISTANCE_THRESHOLD) {
            // Spawn new particle
            const newParticle = {
                id: Date.now(),
                x: clientX,
                y: clientY,
                icon: icons[Math.floor(Math.random() * icons.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
            };

            setTrail((prev) => [...prev, newParticle]);
            lastPos.current = { x: clientX, y: clientY };
        }
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    const removeParticle = (id) => {
        setTrail((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <AnimatePresence>
                {trail.map((particle) => (
                    <TrailItem key={particle.id} particle={particle} onComplete={() => removeParticle(particle.id)} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const TrailItem = ({ particle, onComplete }) => {
    const Icon = particle.icon;

    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0,
                x: particle.x,
                y: particle.y,
                rotate: 0
            }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
                y: particle.y + 200, // Fall down effect
                x: particle.x + (Math.random() - 0.5) * 100, // Slight random x drift
                rotate: particle.rotation + (Math.random() > 0.5 ? 200 : -200)
            }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
                times: [0, 0.2, 1]
            }}
            onAnimationComplete={onComplete}
            className="absolute top-0 left-0"
            style={{ color: particle.color }}
        >
            <Icon size={24} />
        </motion.div>
    );
};

export default MouseTrail;

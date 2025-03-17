import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration: number;
  text: string;
}

const AnimatedCounter = ({ from, to, duration, text }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        if (progress < 1) {
          setCount(Math.floor(from + progress * (to - from)));
          requestAnimationFrame(animate);
        } else {
          setCount(to); // Garante que o número final é atingido
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {count}
    </motion.div>
  );
};

export default function Counter({ from, to, text }: CounterProps) {
  return (
    <div className="counter">
      <AnimatedCounter from={from} to={to} duration={2000} text={text} />
      <p>{text}</p>
    </div>
  );
}

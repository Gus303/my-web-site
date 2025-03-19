import "./Hero.css"
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Shape from './Shape'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { triggerOnce: true });
    return (
        <div className="hero">
            {/* Background */}
            <div className="bg">
                  {/* 3d img */}
                  <Canvas>
                 <Suspense fallback="loading...">
                  <Shape />
                 </Suspense>
                 </Canvas>
                <div className="hImg">
                    <img src="/mebg.png" alt="my as a draw" />
                </div>
            </div>
            {/* Left Section */}
            <div className="hSection left">
                {/* Title */}
                <motion.h1 
                ref={ref}
                initial={{ x: -20, opacity: 0 }} 
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{duration:1}}
                className="hTitle">
                    Hello,
                    <br/>
                    <span>Be Welcome</span>
                </motion.h1>
            {/* Social */}
            <div className="social">
            <motion.h2 
            ref={ref}
            initial={{ x: -20, opacity: 0 }} 
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{duration:1}}
            >How to reach me</motion.h2>
                <div className="socialList">
                    <motion.a 
                    ref={ref} 
                    initial={{ opacity: 0, y: -20, scale: 1 }}
                    animate={isInView ? { y: 0, opacity: 1, type: "spring", stiffness: 300 } : {}}
                    transition={isInView ? { duration: 1,  ease: "easeOut" } : {duration:0}}
                    whileHover={{ scale: 1.2 }}
                    href="#"><img src="/github.svg" alt="Github" /></motion.a>
                    <motion.a 
                    ref={ref} 
                    initial={{ opacity: 0, y: -40 }}
                    animate={isInView ? { y: 0, opacity: 1, type: "spring", stiffness: 300 } : {}}
                    transition={isInView ? { duration: 1,  ease: "easeOut" } : {duration:0}}
                    whileHover={{ scale: 1.2 }}
                    href="#"><img src="/linkedin.svg" alt="LinkedIn" /></motion.a>
                    <motion.a 
                    ref={ref} 
                    initial={{ opacity: 0, y: -60 }}
                    animate={isInView ? { y: 0, opacity: 1, type: "spring", stiffness: 300 } : {}}
                    transition={isInView ? { duration: 1,  ease: "easeOut" } : {duration:0}} 
                    whileHover={{ scale: 1.2 }}
                    href="#"><img src="/instagram.svg" alt="Instagram" /></motion.a>
                    <motion.a 
                    ref={ref} 
                    initial={{ opacity: 0, y: -80 }}
                    animate={isInView ? { y: 0, opacity: 1, type: "spring", stiffness: 300 } : {}} 
                    transition={isInView ? { duration: 1,  ease: "easeOut" } : {duration:0}}
                    whileHover={{ scale: 1.2 }}
                    href="#"><img src="/dribbble.svg" alt="Dribbble" /></motion.a>
                </div>
            </div>
            {/* Services */}
            <motion.div 
            animate={{y:[0,5], 
            opacity:[0,1,0]}}
            transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}  
            href="#services" className="scroll">
                <svg 
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg">
                <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"/>
                <motion.path
                animate={{y:[0,5]}}
                transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}
                d="M12 5V8" 
                stroke="white"  
                strokeWidth="1" 
                strokeLinecap="round"/>
                </svg>
            </motion.div>
            </div>
            <div className="hSection right">
            </div>
        </div>
    )
}
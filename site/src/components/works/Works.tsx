import "./Works.css"
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer"
import DataModelContainer from "./data_mo/DataModelContainer"
import PencilModelContainer from "./pencil/PencilModelContainer"
import Counter from "./Counter"

const weekers = [
    {
        id: 1,
        img: "/web_icon.png",
        title: "Web Development",
    },
    {
        id: 2,
        img: "/data_icon.png",
        title: "Data analyst",
    },
    {
        id: 3,
        img: "data_icon.png",
        title: "Web Design",
    }
];

export default function Works() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin:"-300px" });
    const [currentWorkId,setCurrentWorkId] = useState(1)
    return(
        <div className="works" ref={ref}>
            <div className="sSection left">
                <motion.h1
                initial={{ x: -20, opacity: 0 }} 
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{duration:1}}
                className="sTitle">{isInView ? "How do I help" : ""}</motion.h1>
                <div className="serviceList">
                {weekers.map((weeker) => (
                        <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                         transition={isInView ? { duration: 1, delay: 0.8 }: {duration:0} } 
                        className="weekers" 
                        key={weeker.id}
                        onClick={()=> setCurrentWorkId(weeker.id)}
                        >
                            <div className="weekerIcon">
                                <img src={weeker.img} alt={weeker.title} />
                            </div>
                            <h2>{weeker.title}</h2>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                animate={isInView ? {  } : {}}
                transition={{duration:1}}
                className="counterList">
                <Counter from={0} to={13} text="Projects Completed"/>
                <Counter from={0} to={5} text="Projects Under Construction"/>
                </motion.div>
            </div>
            <div className="sSection right">
               {
                 currentWorkId === 1 ? (<ComputerModelContainer/>) : currentWorkId === 2 ? (<DataModelContainer/>) : <PencilModelContainer/>
               }
            </div>
        </div>
    )
}

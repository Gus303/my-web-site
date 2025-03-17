import "./Portfolio.css";
import { useRef } from "react";
import { useTransform, motion,useScroll } from "framer-motion";

interface Item {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
}

const items: Item[] = [
  {
    id: 1,
    img: "/node_bg.png",
    title: "NodeJS Project",
    desc: "Project in progress...",
    link: "",
  },
  {
    id: 2,
    img: "/python_bg.png",
    title: "Python Project",
    desc: "Project in progress...",
    link: "",
  },
  {
    id: 3,
    img: "/postgres_bg.png",
    title: "Postgres Project",
    desc: "Project in progress...",
    link: "",
  },
];

interface ListItemProps {
  item: Item;
}

function ListItem({ item }: ListItemProps) {
  return (
    <div className="pItem">
      <div className="pImg">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
            <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);
    return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{x: xTranslate}}>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </motion.div>
      <section></section>
      <section></section>
    </div>
  );
}

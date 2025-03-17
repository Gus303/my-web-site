import ComputerModelContainer from "./computer/ComputerModelContainer"
import DataModelContainer from "./data_mo/DataModelContainer"
import PencilModelContainer from "./pencil/PencilModelContainer"
import "./Works.css"
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

function Works() {
    return(
        <div className="works">
            <div className="sSection left">
                <h1 className="sTitle">How do I help?</h1>
                <div className="serviceList">
                {weekers.map((weeker) => (
                        <div className="weekers" key={weeker.id}>
                            <div className="weekerIcon">
                                <img src={weeker.img} alt={weeker.title} />
                            </div>
                            <h2>{weeker.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="counterList">
                <Counter from={0} to={104} text="Projects Completed"/>
                <Counter from={0} to={5} text="Projects Under Construction"/>
                </div>
            </div>
            <div className="sSection right">
                <PencilModelContainer />
            </div>
        </div>
    )
}
export default Works
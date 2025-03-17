import ComputerModelContainer from "./computer/ComputerModelContainer"
import "./Works.css"


function Works() {
    return(
        <div className="works">
            <div className="sSection left"></div>
            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}
export default Works
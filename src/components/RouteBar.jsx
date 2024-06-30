import { FaDiagramNext } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { MdAssessment } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";


const RouteBar = () => {
    return (
        <div className="route-bar">
            <div className="route-box">

                <div className="circle">
                    <FaCircleNotch style={{ fontSize: '50px' }} />
                    <p>Progress</p>
                </div>

                <div className="assessment">
                    <MdAssessment style={{ fontSize: '50px' }} />
                    <p>Assessment</p>
                </div>

                <div className="circle">
                    <FaDiagramNext style={{ fontSize: '50px' }} />
                    <p>Lesson Plan</p>
                </div>

                <div className="tasks">
                    <GrTasks style={{ fontSize: '50px' }} />
                    <p>Tasks</p>
                </div>
                <div className="analytics">
                    <VscGraphLine style={{ fontSize: '50px' }} />
                    <p>Analytics</p>
                </div>

            </div>
        </div>
    )
}
export default RouteBar
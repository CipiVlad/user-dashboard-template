
import { SiGooglemeet } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <p>abc school</p>
            <div className="date-n-meet-box">
                <div className="date-box">
                    {/* date fromat: 30, June, 2022 */}
                    <FaCalendarAlt /> {new Date().toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })}

                </div>
                <div className="meet-box">
                    <SiGooglemeet /> Google meet
                </div>
            </div>
        </header>

    )
}
export default Header
import five from '../img/five.png'
import six from '../img/six.png'
import seven from '../img/seven.png'
import eight from '../img/eight.png'
import nine from '../img/9.png'

const NumberBar = () => {
    return (
        <div className="number-box">
            <img src={five} alt="number" />
            <img src={six} alt="number" />
            <img src={seven} alt="number" />
            <img src={eight} alt="number" />
            <img src={nine} alt="number" />
        </div>
    )
}
export default NumberBar
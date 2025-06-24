import { useContext } from "react"
import { mediaContext } from "../../contexts/MediaContext"
import { useNavigate } from "react-router-dom"
import { pageContext } from "../../contexts/PageContext"
import { timeRangeContext } from "../../contexts/TimeRangeContext"



function TimePeriod() {
    const nav = useNavigate();
    const { headerItem } = useContext(mediaContext);
    const { setPageNumber } = useContext(pageContext);
    const { headerRange, setHeaderRange } = useContext(timeRangeContext);

    function setPeriod(e: React.ChangeEvent<HTMLSelectElement>) {
        nav(e.target.value)
        setPageNumber(1)
    }

    function loadDay() {
        setHeaderRange('day')
    }
    function loadWeek() {
        setHeaderRange('week')
    }


    return (
        <div >
            <select  className="text-[14px] p-2 border-2 rounded-2xl" value={`/trending/${headerItem}/${headerRange}/1`}   onChange={(e) => setPeriod(e)}>
                <option value={`/trending/${headerItem}/day/1`} onClick={loadDay}>
                    Day
                </option>

                <option value={`/trending/${headerItem}/week/1`} onClick={loadWeek}>
                    Week
                </option>
            </select>
        </div>
    )
}

export default TimePeriod
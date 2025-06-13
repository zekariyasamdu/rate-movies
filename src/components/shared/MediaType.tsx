import { useContext } from "react"
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext"
import { useNavigate } from "react-router-dom"
import { pageContext } from "../../contexts/PageContext"
import { timeRangeContext } from "../../contexts/TimeRangeContext"



function MediaType() {
    const nav = useNavigate();
    const { headerItem, setHeaderItem } = useContext(trendingHeaderFocusContext);
    const { setPageNumber } = useContext(pageContext);
    const { headerRange } = useContext(timeRangeContext);

    function setPeriod(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value)
        nav(e.target.value)
        setPageNumber(1)
    }

    function loadMovie() {
        setHeaderItem('movie')
    }
    function loadTv() {
        setHeaderItem('tv')
    }


    return (
        <div>
            <select value={`/trending/${headerItem}/${headerRange}/1`}  onChange={(e) => setPeriod(e)}>
                <option value={`/trending/movie/${headerRange}/1`} onClick={loadMovie}>
                    movie
                </option>

                <option value={`/trending/tv/${headerRange}/1`} onClick={loadTv}>
                    tv
                </option>
            </select>
        </div>
    )
}

export default MediaType;
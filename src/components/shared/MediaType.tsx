import { useContext } from "react"
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext"
import { useNavigate } from "react-router-dom"
import { pageContext } from "../../contexts/PageContext"
import { timeRangeContext } from "../../contexts/TimeRangeContext"
import { navBarContext } from "../../contexts/NavBarContext"
import { queryContext } from "../../contexts/QueryContext"



function MediaType() {
    const nav = useNavigate();
    const { headerItem, setHeaderItem } = useContext(trendingHeaderFocusContext);
    const { setPageNumber } = useContext(pageContext);
    const { headerRange } = useContext(timeRangeContext);
    const {query}  = useContext(queryContext)
    const {bar} = useContext(navBarContext)

    function setPeriod(e: React.ChangeEvent<HTMLSelectElement>) {
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
            <select className="text-[16px] p-2 border-2 rounded-2xl" value={`/trending/${headerItem}/${headerRange}/1`}  onChange={(e) => setPeriod(e)}>
                <option value={`/${bar}/movie/${headerRange}/1`} onClick={loadMovie}>
                    Movie
                </option>

                <option value={`/${bar}/tv/${bar === 'search'? query : headerRange}/1`} onClick={loadTv}>
                    Tv
                </option>
            </select>
        </div>
    )
}

export default MediaType;
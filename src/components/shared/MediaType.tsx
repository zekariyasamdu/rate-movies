import { useContext } from "react"
import { mediaContext } from "../../contexts/MediaContext"
import { useNavigate } from "react-router-dom"
import { pageContext } from "../../contexts/PageContext"
import { timeRangeContext } from "../../contexts/TimeRangeContext"
import { navBarContext } from "../../contexts/NavBarContext"
import { queryContext } from "../../contexts/QueryContext"



function MediaType() {
    const nav = useNavigate();
    const { headerItem, setHeaderItem } = useContext(mediaContext);
    const { setPageNumber } = useContext(pageContext);
    const { headerRange } = useContext(timeRangeContext);
    const { query } = useContext(queryContext)
    const { bar } = useContext(navBarContext)

    function setPeriod(e: React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.value !== '') {
            nav(e.target.value)
            setPageNumber(1)
        }
    }
    function loadMovie() {
        setHeaderItem('movie')
    }
    function loadTv() {
        setHeaderItem('tv')
    }


    return (
        <div>
            <select className="text-[16px] p-2 border-2 rounded-2xl" value={`/trending/${headerItem}/${headerRange}/1`} onChange={(e) => setPeriod(e)}>
                <option value={''}>
                    Media
                </option>
                <option value={`/${bar}/tv/${bar === 'search' ? query : headerRange}/1`} onClick={loadTv}>
                    Tv
                </option>

                <option value={`/${bar}/movie/${bar === 'search' ? query : headerRange}/1`} onClick={loadMovie}>
                    Movie
                </option>
            </select>
        </div>
    )
}

export default MediaType;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { useCheckLocation } from "../../hooks/route-hooks/useExtractLocation";
import { pageContext } from "../../contexts/PageContext";
export default function HeaderTrending() {
    const { headerRange, } = useContext(timeRangeContext);
    const { setHeaderItem } = useContext(trendingHeaderFocusContext);
    const { setPageNumber } = useContext(pageContext)

    function resetPageCount() {
        setPageNumber(1)
    }

    function loadMovies() {
        setHeaderItem('movie')
    }
    function loadTv() {
        setHeaderItem('tv')
    }


    const selctedOptionStyle: string = "border-b-2 border-blue-400";

    return (
        <div className="headers">
            <Link to={`/trending/movie/${headerRange}/1`}
                onClick={loadMovies}>
                <div
                    className={`headers-items ${useCheckLocation('trending/movie') ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Movies
                </div>
            </Link>
            <Link to={`/trending/tv/${headerRange}/1`}
                onClick={loadTv}>
                <div
                    className={`headers-items ${useCheckLocation('trending/tv') ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Tv
                </div>
            </Link>

        </div>
    );
}

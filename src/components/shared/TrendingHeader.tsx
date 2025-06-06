import { useContext } from "react";
import { Link } from "react-router-dom";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { useCheckLocation } from "../../hooks/route-hooks/useExtractLocation";
import { pageContext } from "../../contexts/PageContext";

export default function HeaderTrending() {
    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);
    const { setPageNumber } = useContext(pageContext)

    function resetPageCount() {
        setPageNumber(1)
    }


    const selctedOptionStyle: string = "border-b-2 border-blue-400";

    return (
        <div className="headers">
            <Link to={`/trending/person/${headerRange}/1`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/person') ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    People
                </div>
            </Link>
            <Link to={`/trending/movie/${headerRange}/1`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/movie') ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Movies
                </div>
            </Link>
            <Link to={`/trending/tv/${headerRange}/1`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/tv') ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Tv
                </div>
            </Link>

            <Link to={`/trending/${headerItem}/day/1`}>
                <div
                    className={`headers-items ${headerRange === "day" ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Days
                </div>
            </Link>

            <Link to={`/trending/${headerItem}/week/1`}>

                <div
                    className={`headers-items ${headerRange === "week" ? selctedOptionStyle : ""
                        }`}
                    onClick={resetPageCount}
                >
                    Weeks
                </div>
            </Link>
        </div>
    );
}

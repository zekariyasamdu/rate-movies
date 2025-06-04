import { useContext } from "react";
import { Link } from "react-router-dom";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { useCheckLocation } from "../../hooks/route-hooks/useExtractLocation";

export default function HeaderTrending() {
    const { setHeaderItem } = useContext(trendingHeaderFocusContext);
    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);

    function moviesFocus() {
        setHeaderItem("movie")
    }
    function tvFocus() {
        setHeaderItem("tv")
    }
    function personFocus() {
        setHeaderItem("person")
    }


    const selctedOptionStyle: string = "border-b-2 border-blue-400";

    return (
        <div className="headers">
            <Link to={`/trending/person/${headerRange}`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/person') ? selctedOptionStyle : ""
                        }`}
                    onClick={personFocus}
                >
                    People
                </div>
            </Link>
            <Link to={`/trending/movie/${headerRange}`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/movie') ? selctedOptionStyle : ""
                        }`}
                    onClick={moviesFocus}
                >
                    Movies
                </div>
            </Link>
            <Link to={`/trending/tv/${headerRange}`}>
                <div
                    className={`headers-items ${useCheckLocation('trending/tv') ? selctedOptionStyle : ""
                        }`}
                    onClick={tvFocus}
                >
                    Tv
                </div>
            </Link>

            <Link to={`/trending/${headerItem}/day`}>
                <div
                    className={`headers-items ${headerRange === "day" ? selctedOptionStyle : ""
                        }`}
                >
                    Days
                </div>
            </Link>

            <Link to={`/trending/${headerItem}/week`}>

                <div
                    className={`headers-items ${headerRange === "week" ? selctedOptionStyle : ""
                        }`}
                >
                    Weeks
                </div>
            </Link>
        </div>
    );
}

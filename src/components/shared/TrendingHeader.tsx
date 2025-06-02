import { useContext } from "react";
import { Link } from "react-router-dom";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { timeRangeContext } from "../../contexts/TimeRangeContext";

export default function HeaderTrending() {
    const { headerItem, setHeaderItem } = useContext(trendingHeaderFocusContext);
    const { headerRange, setHeaderRange } = useContext(timeRangeContext);

    function changeTimePeriod() {
        if (headerRange === "day") {
            setHeaderRange("week");
            return;
        }
        setHeaderRange("day");
    }

    function moviesFocus(){
        setHeaderItem( "movie")
    }
    function tvFocus(){
        setHeaderItem( "tv")
    }
    function personFocus(){
        setHeaderItem( "person")
    }


    const selctedOptionStyle: string = "border-b-2 border-blue-400";

    return (
        <div className="headers">
            <Link to="/trending/people">
                <div
                    className={`headers-items ${headerItem === "person" ? selctedOptionStyle : ""
                        }`}
                    onClick={personFocus}
                >
                    People
                </div>
            </Link>
            <Link to="/trending/movies">
                <div
                    className={`headers-items ${headerItem === "movie" ? selctedOptionStyle : ""
                        }`}
                    onClick={moviesFocus}
                >
                    Movies
                </div>
            </Link>
            <Link to="/trending/tv">
                <div
                    className={`headers-items ${headerItem === "tv" ? selctedOptionStyle : ""
                        }`}
                    onClick={tvFocus}
                >
                    Tv
                </div>
            </Link>

            <div
                className={`headers-items ${headerRange === "day" ? selctedOptionStyle : ""
                    }`}
                onClick={changeTimePeriod}
            >
                Days
            </div>
            <div
                className={`headers-items ${headerRange === "week" ? selctedOptionStyle : ""
                    }`}
                onClick={changeTimePeriod}
            >
                Weeks
            </div>
        </div>
    );
}

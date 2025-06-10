import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCheckLocation } from "../../hooks/route-hooks/useExtractLocation";
import { useContext } from "react";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";

type NavbarProp = {
    addClass?: string
}
export default function Navbar({addClass= ""}: NavbarProp) {


    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);


    const focusedOnStyle: string = 'text-blue-500'

    return (
        <div className={`${addClass} ml-auto z-20 p-5 h-max flex flex-col`}>


            <div className={`side-bar-items ${useCheckLocation('search') ? focusedOnStyle : ''}`}
                title="Search">
                <Link to='/search' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>

            <div className={`side-bar-items ${useCheckLocation('home') ? focusedOnStyle : ''}`}
                title="Home Page">
                <Link to='/home' >
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </div>

            <div className={`side-bar-items ${useCheckLocation('trending') ? focusedOnStyle : ''}`}
                title="Trending">
                <Link to={`/trending/${headerItem}/${headerRange}/1`} >
                    <FontAwesomeIcon icon={faFireFlameCurved} />
                </Link>
            </div>


        </div>
    )
}


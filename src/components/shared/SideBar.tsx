import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useChangeTheme from "../../hooks/style-hooks/useChangeTheme";
import { Link } from "react-router-dom";
import useResizeSideBars from "../../hooks/style-hooks/useResizeSideBars";
import { useCheckLocation } from "../../hooks/route-hooks/useExtractLocation";
import { useContext } from "react";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";

export default function SideBar() {


    const { widthValue, position, stateOfResizeSideBar, setResizeSideBar } = useResizeSideBars()
    const {headerRange} = useContext(timeRangeContext);
    const {headerItem} = useContext(trendingHeaderFocusContext);
    const { theme, setTheme } = useChangeTheme();

    

    function resizeSideBar(): void {
        setResizeSideBar(!stateOfResizeSideBar);
    }

    function toggleBetweenThemes(): void {
        setTheme(!theme)
    }

 

    const focusedOnStyle: string = 'text-blue-500'

    return (
        <div className={`absolute top-20 left-2.5 z-20 ${widthValue} gap-5 rounded-3xl h-100 flex flex-col ${position} bg-L-tertiary dark:bg-D-tertiary`}>

            <div className="side-bar-items"
                onClick={resizeSideBar}
                title="Sidebar">
                <FontAwesomeIcon
                    icon={faBars} />
            </div>

            <div className={`side-bar-items ${useCheckLocation('search')? focusedOnStyle : ''}`}
                title="Search">
                <Link to='/search' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>

            <div className={`side-bar-items ${useCheckLocation('home')? focusedOnStyle : ''}`}
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

            <div className="absolute side-bar-items bottom-0"
                onClick={toggleBetweenThemes}>
                {!theme ?
                    <FontAwesomeIcon
                        title="light-mode"
                        icon={faSun} /> :
                    <FontAwesomeIcon
                        title="dark-mode"
                        icon={faMoon} />}
            </div>

        </div>
    )
}
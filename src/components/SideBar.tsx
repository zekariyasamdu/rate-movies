// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// Hooks
import useChangeTheme from "../hooks/useChangeTheme";
// Roters
import { Link } from "react-router-dom";
import useResizeSideBars from "../hooks/useResizeSideBars";

interface SideBarProps {
    currentPage: string
}


export default function SideBar({ currentPage }: SideBarProps) {

    // Resizing the sidebar
    const { widthValue, position, stateOfResizeSideBar, setResizeSideBar } = useResizeSideBars()
    function resizeSideBar(): void {
        setResizeSideBar(!stateOfResizeSideBar);
    }

    // toggling between the dark and light themes
    const { theme, setTheme } = useChangeTheme()
    function toggleBetweenThemes(): void {
        setTheme(!theme)
    }

    return (
        <div className={`absolute top-20 left-2.5 z-20 ${widthValue} gap-5 rounded-3xl h-100 flex flex-col ${position} bg-L-tertiary dark:bg-D-tertiary`}>
            {/* Resizing The Sidebar */}
            <div className="side-bar-items"
                onClick={resizeSideBar}
                title="Sidebar">
                <FontAwesomeIcon
                    icon={faBars} />
            </div>
            {/*  Search  */}
            <div className={`side-bar-items ${currentPage === 'search' ? "text-blue-500" : ''}`}
                title="Search">
                <Link to='/search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>
            {/* Routes To Homepage */}
            <div className={`side-bar-items ${currentPage === 'home' ? "text-blue-500" : ''}`}
                title="Home Page">
                <Link to='/'>
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </div>
            {/* Trending */}
            <div className={`side-bar-items ${currentPage === 'trending' ? "text-blue-500" : ''}`}
                title="Trending">
                <Link to='/trending/people' >
                    <FontAwesomeIcon icon={faFireFlameCurved} />
                </Link>
            </div>
            {/*Dark/Light Theme*/}
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
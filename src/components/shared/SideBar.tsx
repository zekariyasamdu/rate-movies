import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useChangeTheme from "../../hooks/style-hooks/useChangeTheme";
import { Link } from "react-router-dom";
import useResizeSideBars from "../../hooks/style-hooks/useResizeSideBars";
import { useContext } from "react";
import { siderBarFoucsContext } from "../../contexts/SideBarFocusContext";


export default function SideBar() {


    const { widthValue, position, stateOfResizeSideBar, setResizeSideBar } = useResizeSideBars()
    const { menuItem, setMenuItems } = useContext(siderBarFoucsContext)
    const { theme, setTheme } = useChangeTheme()

    console.log(menuItem)

    function resizeSideBar(): void {
        setResizeSideBar(!stateOfResizeSideBar);
    }

    function toggleBetweenThemes(): void {
        setTheme(!theme)
    }

    function searchFocus() {
        setMenuItems('search')

    }

    function homeFocus() {
        setMenuItems('home')
    }

    function trendingFocus() {
        setMenuItems('trending')
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

            <div className={`side-bar-items ${menuItem === 'search' ? focusedOnStyle : ''}`}
                title="Search">
                <Link to='/search' onClick={searchFocus}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </div>

            <div className={`side-bar-items ${menuItem === 'home' ? focusedOnStyle : ''}`}
                title="Home Page">
                <Link to='/' onClick={homeFocus}>
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
            </div>

            <div className={`side-bar-items ${menuItem === 'trending' ? focusedOnStyle : ''}`}
                title="Trending">
                <Link to='/trending/person' onClick={trendingFocus} >
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
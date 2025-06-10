import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useChangeTheme from "../../hooks/style-hooks/useChangeTheme";


export default function Themes() {

    const { theme, setTheme } = useChangeTheme();
    function toggleBetweenThemes(): void {


        setTheme(!theme)
    }

    return (
        <div className="absolute side-bar-items bottom-0"
            onClick={toggleBetweenThemes}>
            {theme ?
                <FontAwesomeIcon
                    title="light-mode"
                    icon={faSun} /> :
                <FontAwesomeIcon
                    title="dark-mode"
                    icon={faMoon} />}
        </div>

    )
}

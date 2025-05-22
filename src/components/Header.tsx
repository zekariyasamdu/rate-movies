
// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// Hooks
import useChangeTheme from "../hooks/useChangeTheme";


export default function Header() {
    // toggles between themes
    const { theme, setTheme } = useChangeTheme()
    function toggleBetweenThemes(): void {
        setTheme(!theme)
    }

    
    return (
        <div className="sticky z-1 top-0 w-full flex flex-row items-center h-14 border-b-1 border-L-tertiary bg-L-secondary dark:border-D-tertiary dark:bg-D-secondary">
            <div className="w-9 h-9 bg-L-primary ml-auto flex-center rounded-full cursor-pointer dark:bg-D-primary shadow-2xl shadow-D-primary"
                onClick={toggleBetweenThemes}>
                {!theme ?
                    <FontAwesomeIcon className="text-L-primary"
                        title="light-mode"
                        icon={faSun} /> :
                    <FontAwesomeIcon className="text-D-primary"
                        title="dark-mode"
                        icon={faMoon} />}
            </div>
        </div>
    )
}
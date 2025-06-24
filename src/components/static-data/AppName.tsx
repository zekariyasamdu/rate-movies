import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface AppNameProps{
    className: string
} 

function AppName({className = ''} : AppNameProps) {
    return (
        <div>
            <h1 className={` p-3 ${className}`}>Film Ratings <FontAwesomeIcon icon={faReact} /> </h1>
        </div>
    )
}

export default AppName
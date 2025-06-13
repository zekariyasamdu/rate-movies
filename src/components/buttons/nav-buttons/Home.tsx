import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useCheckLocation } from "../../../hooks/route-hooks/useExtractLocation"

function Home() {
    return (
        <div className={`side-bar-items ${useCheckLocation('home') ? 'text-blue-500' : ''}`}
            title="Home Page">
            <Link to='/home' >
                <FontAwesomeIcon icon={faHouse} />
            </Link>
        </div>
    )
}

export default Home

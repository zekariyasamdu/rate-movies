import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useCheckLocation } from "../../../hooks/route-hooks/useExtractLocation"


function Search() {
    return (

        <div className={`side-bar-items ${useCheckLocation('search') ? 'text-blue-500' : ''}`}
            title="Search">
            <Link to='/search' >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
        </div>
    )
}

export default Search
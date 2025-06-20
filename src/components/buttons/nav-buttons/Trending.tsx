import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useContext } from "react";
import  { Link } from "react-router-dom";
import { timeRangeContext } from "../../../contexts/TimeRangeContext";
import { mediaContext } from "../../../contexts/MediaContext";
import { useCheckLocation } from "../../../hooks/route-hooks/useExtractLocation";

function Trending() {

    
    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(mediaContext);

    return (

        <div className={`side-bar-items ${useCheckLocation('trending') ? 'text-blue-500' : ''}`}
            title="Trending">
            <Link to={`/trending/${headerItem}/${headerRange}/1`} >
                <FontAwesomeIcon icon={faFireFlameCurved} />
            </Link>
        </div>

    )
}

export default Trending
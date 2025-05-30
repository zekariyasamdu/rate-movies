// hooks
import { useState } from "react";
// types
import type { eachPersonArrayType } from "../../types/types";

interface EachPersonContainerProp {
    item: eachPersonArrayType
}


export default function EachPersonContainer({ item }: EachPersonContainerProp) {

    const [displayRating, setDisplayRatings] = useState(false)
    function displayRatings() {
        setDisplayRatings(true)
    }

    function hideRatings() {
        setDisplayRatings(false)
    }

    return (
        <div className="w-[243px] h-[363px] relative m-3 flex-center text-cente hover:cursor-pointer border-3 border-b-L-secondary hover:border-blue-400 "
            onMouseEnter={displayRatings}
            onMouseOut={hideRatings}>
            <img className={`${displayRating ? "opacity-50" : ''}`} src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} width="240" alt={item.name} />
            {displayRating && <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-7xl text-L-primary"
                onMouseEnter={displayRatings}
                onMouseOut={hideRatings}>
                {(Math.round(item.popularity * 10) / 10).toString()}</p>}
        </div>
    )
}



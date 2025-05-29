// hooks
import { useState } from "react";
// types
import type { eachArrayType } from "../types/types";


interface EachMoveContainerProp {
    Item: eachArrayType,
    index: number
}


export default function EachMoveContainer({ Item, index }: EachMoveContainerProp) {

    const [displayRating, setDisplayRatings] = useState(false)
    function displayRatings() {
        setDisplayRatings(true)
    }

    function hideRatings() {
        setDisplayRatings(false)
    }

    return (
        <div key={index} className="w-max h-max relative m-3 flex-center text-cente hover:cursor-pointer" onMouseEnter={displayRatings} onMouseOut={hideRatings}>
            <img className={`${displayRating? "opacity-50": ''}`} src={`https://image.tmdb.org/t/p/w500${Item.poster_path}`} width="240" alt={Item.title} />
            {displayRating && <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-7xl text-L-primary" onMouseEnter={displayRatings} onMouseOut={hideRatings}>{Item.vote_average}</p>}
        </div>
    )
}



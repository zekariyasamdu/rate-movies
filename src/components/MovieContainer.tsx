// hooks
import { useContext } from "react";
import useFetchLocalData from "../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext";
// types
import type { eachArrayType } from "../types/types";


export default function LoadedMovies() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <>
            <header className="absolute left-43 top-38 text-4xl">Trending</header>
            <div className="absolute flex-wrap flex m-auto left-0 right-0 top-1/2  translate-y-1/3 w-5/7 h-140">
                {fetchedData?.results.map((Item: eachArrayType, index) => (
                    <div key={index} className="m-3">
                        <img src={`https://image.tmdb.org/t/p/w500${Item.poster_path}`} width="240" alt={Item.title} />
                    </div>)
                )}
            </div>
        </>

    )
}


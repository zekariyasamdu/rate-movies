// hooks
import { useContext} from "react";
import useFetchLocalData from "../../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../../contexts/ContentUpdatedContext";
// types
import type { eachMovieArrayType, fetchedLocalStorageType } from "../../types/types";
// component
import EachMovieContainer from ".././movies/EachMovieContanier";


export default function LoadedMovies() {
    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData: fetchedLocalStorageType | null  = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <>
            <div className=" flex-wrap flex m-auto w-5/7 h-max">
                {fetchedData?.results.map((Item: eachMovieArrayType, index: number) => (
                    <EachMovieContainer key={index} item={Item}/>))}
            </div>
        </>

    )
}



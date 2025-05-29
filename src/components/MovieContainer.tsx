// hooks
import { useContext} from "react";
import useFetchLocalData from "../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext";
// types
import type { eachArrayType } from "../types/types";
import EachMoveContainer from "./EachMovieContanier";


export default function LoadedMovies() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <>
            <div className=" flex-wrap flex m-auto w-5/7 h-max">
                {fetchedData?.results.map((Item: eachArrayType, index) => (
                    <EachMoveContainer Item={Item} index={index}/>))}
            </div>
        </>

    )
}



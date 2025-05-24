// hooks
import { useContext } from "react";
import useFetchLocalData from "../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext";


export default function LoadedMovies() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    
    return (
        <div>
        </div>
    )
}


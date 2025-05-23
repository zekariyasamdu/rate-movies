import { useContext } from "react";
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext";
import useFetchLocalData from "../hooks/useFetchLocalData";

export default function LoadedMovies() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    console.log(fetchedData)
    
    return (
        <div>
        </div>
    )
}


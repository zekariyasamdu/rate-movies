// hooks
import { useContext } from "react";
import useFetchLocalData from "../../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../../contexts/ContentUpdatedContext";
// types
import type { eachPersonArrayType, fetchedLocalStorageType } from "../../types/types";
// component
import EachPersonContainer from ".././persons/EachPersonContainer";


export default function LoadedPeople() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData: fetchedLocalStorageType | null = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <>
            <div className=" flex-wrap flex m-auto w-5/7 h-max">
                {fetchedData?.results.map((Item: eachPersonArrayType, index: number) => (
                    <EachPersonContainer key={index} item={Item} />))}
            </div>
        </>

    )
}



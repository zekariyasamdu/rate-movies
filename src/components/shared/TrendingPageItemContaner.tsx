// hooks
import { useContext } from "react";
import useFetchLocalData from "../../hooks/fetch-data-hooks/useFetchLocalData";
// context
import { contentUpdatedContext } from "../../contexts/ContentUpdatedContext";
// types
import type { fetchedLocalStorageType } from "../../types/objects";
// component
import EachMovieContainer from "../trending/EachMovieContanier";
import EachPersonContainer from "../trending/EachPersonContainer";
import EachTvContainer from "../trending/EachTvContainer";


interface TrendingPageMainContanerProp {
    currentPage: string
}

export default function TrendingPageItemContaner({ currentPage }: TrendingPageMainContanerProp) {
    
    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData: fetchedLocalStorageType | null = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <>
            <div className=" flex-wrap flex m-auto w-5/7 h-max">
                {fetchedData?.results.map((Item, index: number) => {

                    let componentToRender = null; 

                    if (currentPage === 'movie') {
                        componentToRender = <EachMovieContainer key={index} item={Item} />;
                    } else if (currentPage === 'person') {
                        componentToRender = <EachPersonContainer key={index} item={Item} />;
                    } else if (currentPage === 'tv') {
                        componentToRender = <EachTvContainer key={index} item={Item} />;
                    }
                    return componentToRender;

                })}
            </div>
        </>

    )
}



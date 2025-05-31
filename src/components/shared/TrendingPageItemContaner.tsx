import { useContext } from "react";
import useFetchLocalData from "../../hooks/fetch-data-hooks/useFetchLocalData";
import { contentUpdatedContext } from "../../contexts/ContentUpdatedContext";
import { isMovie, type fetchedLocalStorageType, type ImdbItem } from "../../types/objects";
import ItemContainer, { type ItemContainerProp } from "../trending/ItemContainer";

interface TrendingPageMainContainerProp {
    currentPage: string
}

const mapItemToItemContainer = (item: ImdbItem): ItemContainerProp => {

    if (isMovie(item)) {
        return {
            src: item.poster_path,
            rating: item.vote_average,
            title: item.title
        }
    }
    return {
        src: item.profile_path,
        rating: item.popularity,
        title: item.name
    }

}

export default function TrendingPageItemContainer({ currentPage }: TrendingPageMainContainerProp) {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData: fetchedLocalStorageType | null = useFetchLocalData(newDataFetched)
    console.log(fetchedData?.results)

    return (
        <div className=" flex-wrap flex m-auto w-5/7 h-max">
            {fetchedData?.results.map((item, index: number) => <ItemContainer key={`${currentPage}-${index}`} {...mapItemToItemContainer(item)} />)}
        </div>

    )
}



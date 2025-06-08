import { isMovie, type fetchedType, type ImdbItem } from "../../types/items";
import Item, { type ItemContainerProp } from "./Item";
import useFetchItemData from "../../hooks/fetch-data-hooks/useFetchItemData";
import LoadingScreen from "../shared/LoadingScreen";


const mapItemToItemContainer = (item: ImdbItem): ItemContainerProp => {

    if (isMovie(item)) {
        return {
            id: item.id,
            src: item.poster_path,
            rating: item.vote_average,
            title: item.title
        }
    }
    return {
        id:  item.id,
        src: item.profile_path,
        rating: item.popularity,
        title: item.name
    }

}
export default function ItemsContainer() {

    const fetchedData: fetchedType | null = useFetchItemData();
    return (
        <LoadingScreen className="flex-wrap  flex-row flex m-auto w-5/7 h-[1935px]">
                {fetchedData?.results?.map((item: ImdbItem, index: number) => <Item key={index} {...mapItemToItemContainer(item)} />)}  
        </LoadingScreen>

    )
}



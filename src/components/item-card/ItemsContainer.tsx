import { isMovie, type fetchedType, type ImdbItem } from "../../types/items";
import Item, { type ItemContainerProp } from "./Item";
import useFetchItemData from "../../hooks/fetch-data-hooks/useFetchItemData";


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
export default function ItemsContainer() {

    const fetchedData: fetchedType | null = useFetchItemData();
    console.log(fetchedData);
    return (
        <div className=" flex-wrap flex m-auto w-5/7 h-max">
            {fetchedData?.results?.map((item : ImdbItem, index: number) => <Item key={index} {...mapItemToItemContainer(item)} />)}
        </div>

    )
}



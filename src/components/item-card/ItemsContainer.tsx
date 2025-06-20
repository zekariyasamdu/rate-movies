import { isMovie, type IFetchedType, type ImdbItem } from "../../types/items";
import Item, { type ItemContainerProp } from "./Item";
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
        id: item.id,
        src: item.profile_path,
        rating: item.popularity,
        title: item.name
    }

}

type ItemsContainerProp = {
    data : IFetchedType | null
}

export default function ItemsContainer({data} : ItemsContainerProp ) {

    return (
            <LoadingScreen className="flex-wrap flex-row flex justify-center w-6/7 h-[100%] m-auto ">
                {data?.results?.map((item: ImdbItem, index: number) => <Item key={index} {...mapItemToItemContainer(item)} />)}
            </LoadingScreen>
    )
}



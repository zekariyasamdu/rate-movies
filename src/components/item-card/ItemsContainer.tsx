import { type IFetchedType } from "../../types/items";
import Item from "./Item";
import LoadingScreen from "../shared/LoadingScreen";



type ItemsContainerProp = {
    data: IFetchedType | null
}

export default function ItemsContainer({ data }: ItemsContainerProp) {
    return (
        <div>

            <LoadingScreen className="flex-wrap flex-row flex justify-center w-6/7 h-[100%] m-auto ">
                {data?.results?.map((item, index: number) => <Item key={index} id={item.id} src={item.poster_path} rating={item.vote_average} title={item.title? item.title :  item.original_name  } release_date={item.release_date? item.release_date : item.first_air_date } />)}
            </LoadingScreen>
        </div>
    )
}



import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IFetchedType } from "../../types/items";
import LoadingScreen from "../shared/LoadingScreen";
import Item from "./Item";


type HorizontalItemContainerProps = {
    data: IFetchedType | null
    title: string
}

export default function HorizontalItemContainer({ data, title }: HorizontalItemContainerProps) {
    return (
        <div className="relative w-full h-[400px] ">

            <h1 className="ml-32 text-[20px] ">{title}</h1>
            <button className="absolute left-10 top-1/2">   <FontAwesomeIcon className="cursor-pointer border-2 w-15 h-15 rounded-full" icon={faArrowLeft}></FontAwesomeIcon> </button>

            <LoadingScreen className="flex-wrap flex-col flex w-6/7 h-[100%] m-auto overflow-x-scroll overflow-y-hidden">
                {data?.results?.map((item, index: number) => <Item key={index} id={item.id} src={item.poster_path} rating={item.vote_average} title={item.title} />)}
            </LoadingScreen>

            <button className="absolute right-10 top-1/2"> <FontAwesomeIcon className="cursor-pointer border-2 w-15 h-15 rounded-full" icon={faArrowRight}></FontAwesomeIcon> </button>

        </div>

    )
}

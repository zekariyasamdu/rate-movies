import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IFetchedType } from "../../types/items";
import LoadingScreen from "../shared/LoadingScreen";
import Item from "./Item";
import useScrollLeftRight from "../../hooks/style-hooks/useScrollLeftRight";


type HorizontalItemContainerProps = {
    data: IFetchedType | null,
    title: string
}

export default function HorizontalItemContainer({ data, title }: HorizontalItemContainerProps) {
    const { scrollRef, scroll } = useScrollLeftRight();
    console.log(data)

    return (
        <div className="relative w-full h-[400px] ">

            <h1 className="ml-32 text-[20px] border-l-2 pl-3 border-blue-400">{title}</h1>
            <button className="absolute left-10 top-1/2 border-2 w-12 h-12 rounded-full cursor-pointer" onClick={() => scroll("left")}>   <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> </button>

            <div ref={scrollRef} className="flex-wrap flex-col flex w-6/7 h-[100%] m-auto overflow-x-hidden overflow-y-hidden">
                <LoadingScreen className="flex-wrap flex-col flex w-6/7 h-[100%]">
                    {data?.results?.map((item, index: number) => <Item key={index} id={item.id} src={item.poster_path} rating={item.vote_average} title={item.title} release_date={item.release_date} />)}
                </LoadingScreen>
            </div>

            <button className="absolute right-10 top-1/2 border-2 w-12 h-12 rounded-full cursor-pointer" onClick={() => scroll("right")}> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>

        </div>

    )
}
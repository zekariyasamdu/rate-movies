import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IFetchedType } from "../../types/items";
import LoadingScreen from "../shared/LoadingScreen";
import Item from "./Item";
import useScrollLeftRight from "../../hooks/style-hooks/useScrollLeftRight";
import Title from "./Title";
import Scroll from "../buttons/style-buttons/Scroll";


type HorizontalItemContainerProps = {
    data: IFetchedType | null,
    title: string
    
}

export default function HorizontalItemContainer({ data, title }: HorizontalItemContainerProps) {
    const { scrollRef, scroll } = useScrollLeftRight();

    return (
        <div className="relative w-full h-[400px] ">

            <Title  className="ml-32 text-[20px] border-l-2 pl-3 border-blue-400" title={title.toUpperCase()}/>
            <Scroll className="left-10" callBack={scroll} position="left">  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>  </Scroll>
            <div ref={scrollRef} className="flex-wrap flex-col flex w-6/7 h-[100%] m-auto overflow-x-hidden overflow-y-hidden">
                <LoadingScreen className="flex-wrap flex-col flex w-6/7 h-[100%]">
                    {data?.results?.map((item, index: number) => <Item key={index} id={item.id} src={item.poster_path} rating={item.vote_average} title={item.title? item.title : item.original_name} release_date={item.release_date? item.release_date : item.first_air_date} />)}
                </LoadingScreen>
            </div>

            <Scroll className="right-10" callBack={scroll} position="right">  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  </Scroll>
            
        </div>

    )
}
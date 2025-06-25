import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollLeftRight from "../../hooks/style-hooks/useScrollLeftRight";
import LoadingScreen from "../shared/LoadingScreen";
import type { IFetchedType } from "../../types/items";
import useFadeOutOnScroll from "../../hooks/style-hooks/useFadeOutOnScroll";
import { mergeRefs } from "../../utils";
import Hot from "./Hot";

interface DetailContainerProps {
    data: IFetchedType | null
}


function HorizontalBackDropContainer({ data }: DetailContainerProps) {
    const { scrollRef, scroll } = useScrollLeftRight();
    const headerRef = useFadeOutOnScroll()

    return (
        <div className="relative w-full h-[520px]">

            <button className="absolute left-10 top-1/2 border-2 w-12 h-12 rounded-full cursor-pointer" onClick={() => scroll("left")}>   <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> </button>

            <div ref={ mergeRefs(headerRef, scrollRef)} className="flex-wrap flex-col flex w-[75%] h-[100%] m-auto overflow-x-hidden overflow-y-hidden">
                <LoadingScreen className="flex-wrap flex-col flex w-full h-full">
                    {data?.results?.map((item, index) =>
                        {if(index < 5) return <Hot key={index} item={item} /> })}
                </LoadingScreen>
            </div>

            <button className="absolute right-10 top-1/2 border-2 w-12 h-12 rounded-full cursor-pointer" onClick={() => scroll("right")}> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>

        </div>

    )
}

export default HorizontalBackDropContainer
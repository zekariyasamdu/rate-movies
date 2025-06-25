import BackDrop from "./DetailBackDrop";
import OverView from "./OverView";
import PlayButton from "./PlayButton";
import Tags from "./Tags";
import Title from "./Title";
import useFadeOutOnScroll from "../../hooks/style-hooks/useFadeOutOnScroll";
import type { IFetchedMovieType } from "../../types/items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface DetailContainerProps {
    movieData: IFetchedMovieType | null
}

export default function DetailContainer({movieData} : DetailContainerProps) {
    const headerRef = useFadeOutOnScroll();
    
    return (

        <div ref={headerRef} className="relative w-max h-max m-auto mt-2 ">
            <div className="backdrop opacity-90 absolute z-10 w-full h-full"></div>
            <div className="backdrop-bottom opacity-90 absolute z-10 w-full h-full"></div>
            <BackDrop className="max-w max-h rounded-3xl" src={movieData?.backdrop_path} />
            <div className="z-20 absolute flex flex-col gap-5 bottom-20 left-5">

                <div className="flex gap-1 text-[18px] items-center"><FontAwesomeIcon icon={faStar}/>
                { (Math.round((movieData? movieData.vote_average : 0) * 10) / 10).toString()}
                </div>

                <Title title={movieData?.title}></Title>
                <div className="flex flex-row gap-1.5">
                    {movieData?.genres?.map((item, index) => <Tags key={index} text={item.name} />)}
                </div>
                <OverView overview={movieData?.overview} className="text-[18px] text-L-tertiary w-[50%] flex flex-wrap"></OverView>
                <PlayButton link={movieData?.videos.results[0].key} className="flex items-center text-[19px] gap-2  w-max h-max text-D-primary p-3 rounded-full hover:cursor-pointer bg-L-secondary" />
            </div>
        </div>

    )
}

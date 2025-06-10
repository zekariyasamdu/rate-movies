import useFetchMovieData from "../../hooks/fetch-data-hooks/useFetchMovieData"
import BackDrop from "./BackDrop";
import OverView from "./OverView";
import PlayButton from "./PlayButton";
import Tags from "./Tags";
import Title from "./Title";



export default function DetailContainer() {
    const movieData = useFetchMovieData()

    return (
        <div className="relative w-max  h-max m-auto mt-10 inline-block">
            <BackDrop className=" max-w max-h rounded-3xl" src={movieData?.backdrop_path} />
            <div className="absolute flex flex-col gap-5 bottom-20 left-5">
                <Tags></Tags>
                <Title title={movieData?.title}></Title>
                <OverView overview={movieData?.overview} className="text-[18px]  text-gray-400 w-[50%] flex flex-wrap"></OverView>
                <PlayButton link={movieData?.videos.results[0].key} className=" flex items-center text-[19px] gap-2  w-max h-max text-D-primary p-3 rounded-full hover:cursor-pointer bg-L-secondary" />
            </div>
        </div>
    )
}

import useFetchMovieData from "../../hooks/fetch-data-hooks/useFetchMovieData"
import BackDrop from "./BackDrop";
import PlayButton from "./PlayButton";



export default function DetailContainer() {
    const movieData = useFetchMovieData()
    
    return (
        <div className="relative w-max  h-max m-auto mt-10 inline-block">
            <BackDrop className=" max-w max-h rounded-3xl" src={movieData?.backdrop_path} />
            <PlayButton link={movieData?.videos.results[0].key} className="absolute flex items-center text-[19px] gap-2 bottom-20 left-5 w-max h-max text-D-primary p-3 rounded-full hover:cursor-pointer bg-L-secondary"/>
        </div>
    )
}

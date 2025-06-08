import useFetchMovieData from "../../hooks/fetch-data-hooks/useFetchMovieData"
import BackDrop from "./BackDrop";
import PlayButton from "./PlayButton";



export default function DetailContainer() {
    const movieData = useFetchMovieData()

    return (
        <div className="w-max  h-max m-auto mt-10 inline-block">

            <BackDrop src={movieData?.backdrop_path} />
            <PlayButton/>
        </div>
    )
}

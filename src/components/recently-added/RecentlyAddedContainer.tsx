import useFetchDiscover from "../../hooks/fetch-data-hooks/useFetchDiscover";
import type { IMovie } from "../../types/items";
import Title from "../item-card/Title";
import RecentlyAdded from "./RecentlyAdded";

function RecentlyAddedContainer() {
    const movieData = useFetchDiscover('movie');
    const tvData = useFetchDiscover('tv');
    const limtedMovies = movieData?.results.slice(0, 5) || [];
    const limtedTv = tvData?.results.slice(0, 5) || [];
    const tvAndMovie: IMovie[] = [...limtedMovies, ...limtedTv];



    return (
        <div className="flex flex-col w-80 h-170 ml-auto gap-1.5 ">

            <Title className="border-l-2 p-2 border-blue-400" title={"DISCOVER"} />

            <div className="flex flex-col gap-2">
                {tvAndMovie?.map((item, index) => (<RecentlyAdded key={index} item={item} />))}
            </div>

        </div>

    )
}

export default RecentlyAddedContainer
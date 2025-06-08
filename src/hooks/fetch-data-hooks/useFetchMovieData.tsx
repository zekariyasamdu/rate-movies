import { useContext, useEffect, useState } from "react";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";


interface fetchedMovieDataType {
    title: string,
    overview: string,
    backdrop_path: string,
    genres:  [],
    release_date: string,
    adult: boolean,
    homepage: string,
    videos: object
}

const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchMovieData(): fetchedMovieDataType | null {
    const [movieData, setMovieData] = useState<fetchedMovieDataType | null>(null);
    const { id } = useContext(specificIdContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);
    console.log(headerItem)
    console.log(movieData)

    useEffect(() => {
        const fetchMovieData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/${headerItem}/${id}?append_to_response=videos`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: fetchedMovieDataType | null = await rawData.json();
                setMovieData(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchMovieData();
    }, [setMovieData, id, headerItem])
    return movieData
}
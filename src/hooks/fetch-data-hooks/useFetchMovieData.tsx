import { useContext, useEffect, useState } from "react";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import type { fetchedMovieType } from "../../types/items";




const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchMovieData(): fetchedMovieType | null {
    const [movieData, setMovieData] = useState<fetchedMovieType | null>(null);
    const { id } = useContext(specificIdContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);


    useEffect(() => {
        const fetchMovieData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/${headerItem}/${id}?append_to_response=videos`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: fetchedMovieType | null = await rawData.json();
                setMovieData(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchMovieData();
    }, [setMovieData, id, headerItem])

    console.log(movieData)
    return movieData
}
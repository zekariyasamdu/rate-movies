import { useEffect, useState } from "react";
import type {  IFetchedType } from "../../types/items";


const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchDiscover(media: "movie" | "tv" ): IFetchedType | null {
    const [discoverData, setDiscoverData] = useState<IFetchedType | null>(null);


    useEffect(() => {
        const fetchMovieData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/discover/${media}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: IFetchedType | null = await rawData.json();
                setDiscoverData(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchMovieData();
    }, [setDiscoverData, media])
    return discoverData
}
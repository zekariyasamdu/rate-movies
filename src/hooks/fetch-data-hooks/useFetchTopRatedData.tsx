import { useContext, useEffect, useState } from "react";
import { mediaContext } from "../../contexts/MediaContext";
import type { IFetchedType } from "../../types/items";

const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN

export default function useFetchTopRatedData(): IFetchedType | null {
    const [topRated, setTopRated] = useState<IFetchedType | null>(null);
    const { headerItem } = useContext(mediaContext);


    useEffect(() => {
        const fetchTopRated = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/${headerItem}/top_rated?language=en-US&page=1`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: IFetchedType | null = await rawData.json();
                setTopRated(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchTopRated();
    }, [setTopRated, headerItem])

    return topRated;
}
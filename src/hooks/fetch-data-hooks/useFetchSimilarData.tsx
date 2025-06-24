import { useContext, useEffect, useState } from "react";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { mediaContext } from "../../contexts/MediaContext";
import type { IFetchedType } from "../../types/items";

const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN

export default function useFetchSimilarData(): IFetchedType | null {
    const [similarData, setSimilarData] = useState<IFetchedType | null>(null);
    const { id } = useContext(specificIdContext);
    const { headerItem } = useContext(mediaContext);


    useEffect(() => {
        const fetchSimilarData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/${headerItem}/${id}/similar?language=en-US&page=1`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: IFetchedType | null = await rawData.json();
                setSimilarData(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchSimilarData();
    }, [setSimilarData, id, headerItem])
    return similarData;
}
import { useContext, useEffect, useState } from "react";
import { loadingContext } from "../../contexts/LoadingContext";
import { pageContext } from "../../contexts/PageContext";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import type { IFetchedType } from "../../types/items";

const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchItemData(): IFetchedType | null {

    const [returnData, setReturnData] = useState<IFetchedType | null>(null)
    const { setIsLoading } = useContext(loadingContext)
    const { headerItem } = useContext(trendingHeaderFocusContext)
    const { headerRange } = useContext(timeRangeContext)
    const { pageNumber } = useContext(pageContext)
    

    useEffect(() => {

        const getTrendingMovies = async () => {

            try {
                setIsLoading(true)
                const rawData: Response = await fetch(`https://api.themoviedb.org/3/trending/${headerItem}/${headerRange}?page=${pageNumber}?language=en-US`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                })
                const dataJson: IFetchedType | null = await rawData.json()
                setReturnData(dataJson)
            } catch (e) {
                console.error(e)
            } finally {
                setIsLoading(false)
            }
        }
        getTrendingMovies();

    }, [headerItem, headerRange, pageNumber, setIsLoading, setReturnData])

    return returnData;

} 
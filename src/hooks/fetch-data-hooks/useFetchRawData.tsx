import { useContext, useEffect, useState } from "react";
import { loadingScreenContext } from "../../contexts/LoadingScreenContext";

type useFetchRawDataReturn = {
    timePeriod: string,
    setTimePeriod: React.Dispatch<React.SetStateAction<string>>,

}
const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchRawData(pageNumber: number, setDataFetched: React.Dispatch<React.SetStateAction<number>>, currentPage: string): useFetchRawDataReturn{
    
    const [timePeriod, setTimePeriod] = useState('day');
    const {isloading, setIsLoading} = useContext(loadingScreenContext)
    useEffect(() => {
        
        const getTrendingMovies = async () => {
            try {
                setIsLoading(!isloading)
                const rawData: Response = await fetch(`https://api.themoviedb.org/3/trending/${currentPage}/${timePeriod}?page=${pageNumber}?language=en-US`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }

                })
                const data:string = await rawData.json()
                localStorage.setItem('data', JSON.stringify(data))
                setDataFetched(n => n + 1)
                setIsLoading(false)
            } catch (e) {
                console.error(e)
                setIsLoading(false)
            } 
        }
        getTrendingMovies();

    }, [timePeriod, pageNumber])

    return {timePeriod, setTimePeriod}
    
} 
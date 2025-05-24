import { useEffect, useState } from "react";

type useFetchRawDataReturn = {
    timePeriod: string,
    setTimePeriod: React.Dispatch<React.SetStateAction<string>>
}

export default function useFetchRawData(pageNumber: number, setDataFetched: React.Dispatch<React.SetStateAction<number>>): useFetchRawDataReturn{
    
    const [timePeriod, setTimePeriod] = useState('day');

    useEffect(() => {
        
        const getTrendingMovies = async () => {
            try {
                const rawData: Response = await fetch(`https://api.themoviedb.org/3/trending/movie/${timePeriod}?page=${pageNumber}?language=en-US`, {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
                    }

                })
                const data:string = await rawData.json()
                localStorage.setItem('data', JSON.stringify(data))
                setDataFetched(n => n + 1)
            } catch (e) {
                console.error(e)
            } finally {

            }
        }
        getTrendingMovies();

    }, [timePeriod, pageNumber])

    return {timePeriod, setTimePeriod}
    
} 
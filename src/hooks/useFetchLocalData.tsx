import { useEffect, useState } from "react"



export default function useFetchLocalData(newDataFetched: number): string | null {
    const [fetchedData, setFetchedData] = useState<string | null>(null)

    useEffect(() => {


        const data: string | null = localStorage.getItem('data')
        let parsedData = data ? JSON.parse(data) : null;
        setFetchedData(parsedData)

    }, [newDataFetched])
    return fetchedData;

}


import { useEffect, useState } from "react"
import type { fetchedLocalStorageType } from "../../types/objects";



export default function useFetchLocalData(newDataFetched: number): fetchedLocalStorageType | null {
    const [fetchedData, setFetchedData] = useState<fetchedLocalStorageType | null>(null)

    useEffect(() => {


        const data: string | null = localStorage.getItem('data')
        let parsedData: fetchedLocalStorageType = data ? JSON.parse(data) : null;
        setFetchedData(parsedData)

    }, [newDataFetched])
    return fetchedData;

}


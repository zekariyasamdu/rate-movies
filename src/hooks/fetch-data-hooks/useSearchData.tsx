import { useContext, useEffect, useState } from "react"
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext"
import { queryContext } from "../../contexts/QueryContext"

const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
function useSearchData() {

    const [searchData, setSearchData] = useState()
    const query = useContext(queryContext);
    const { headerItem } = useContext(trendingHeaderFocusContext) 
    useEffect(() => {
        const fetchSearchData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/search/${headerItem}?query=${query}&include_adult=false&language=en-US&page=1`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`,
                        'accept': 'application/json'
                    }
                    
                })
                const result = await rawData.json();
                setSearchData(result)
            } catch (e) {
                console.log(e);
            }

        }
        fetchSearchData();
    }, [setSearchData, query, headerItem])

    return searchData;
}

export default useSearchData
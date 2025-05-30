// hooks
import { useContext } from "react";
import useFetchRawData from "../../hooks/fetch-data-hooks/useFetchRawData";
// contexts
import { pageNumberContext } from "../../contexts/PageNumberContext";
import { contentUpdatedContext } from "../../contexts/ContentUpdatedContext";
// routers
import { Link } from "react-router-dom";


// types
interface HeaderTrending {
    currentPage: string
}

export default function HeaderTrending({ currentPage }: HeaderTrending) {

    // Fetching Raw Trending Data based on the time period 
    const { pageNumber } = useContext(pageNumberContext)
    const { newDataFetched, setDataFetched } = useContext(contentUpdatedContext)

    const { timePeriod, setTimePeriod } = useFetchRawData(pageNumber, setDataFetched, currentPage);
    function changeTimePeriod() {
        timePeriod === 'day' ? setTimePeriod('week') : setTimePeriod('day');
    }


    const selctedOptionStyle: string = 'border-b-2 border-blue-400';

    return (
        <div className="headers">
            <Link to='/trending/people'>
                <div className={`headers-items ${currentPage === 'person' ? selctedOptionStyle : ''}`}>People</div>
            </Link>
            <Link to='/trending/movies'>
                <div className={`headers-items ${currentPage === 'movie' ? selctedOptionStyle : ''}`}>Movies</div>
            </Link>
            <Link to='/trending/tv'>
                <div className={`headers-items ${currentPage === 'tv' ? selctedOptionStyle : ''}`}>Tv</div>
            </Link>

            <div className={`headers-items ${timePeriod === 'day' ? selctedOptionStyle : ''}`}
                onClick={changeTimePeriod}>Days</div>
            <div className={`headers-items ${timePeriod === 'week' ? selctedOptionStyle : ''}`}
                onClick={changeTimePeriod}>Weeks</div>
        </div>
    )
}
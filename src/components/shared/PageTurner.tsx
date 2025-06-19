import { useContext } from "react";
import { pageContext } from "../../contexts/PageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { navBarContext } from "../../contexts/NavBarContext";
import { queryContext } from "../../contexts/QueryContext";


type PageTurnerProps = {
    totalPages : number | undefined
}

export default function PageTurner({totalPages}: PageTurnerProps ) {

    const nav = useNavigate();
    const { pageNumber, setPageNumber } = useContext(pageContext);
    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);
    const {query}  = useContext(queryContext)
    const {bar} = useContext(navBarContext)
    


    const lastPage: number | undefined = totalPages;
    function goToPreviousPage(): void {
        if (pageNumber - 1 > 0) {
            setPageNumber((p) => p - 1);
            nav(`/${bar}/${headerItem}/${headerRange}/${pageNumber - 1}`);
        }
    }

    function goToNextPage(): void {
        if (lastPage && pageNumber + 1 < lastPage) {
            setPageNumber((p) => p + 1);
            nav(`/${bar}/${headerItem}/${headerRange}/${pageNumber + 1}`);
        }
    }

    return (
        <div
            className="absolute top-4 left-1/2 -translate-x-1/2 w-1/4 flex gap-3 p-2 justify-center rounded-4xl mb-15 text-D-primary bg-L-tertiary dark:text-L-primary dark:bg-D-tertiary"
            title="pages"
        >
            <div >Showing {pageNumber} of {lastPage}</div>

            <button className="page-turner" onClick={goToPreviousPage}>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>

            <button className="page-turner" onClick={goToNextPage}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
}

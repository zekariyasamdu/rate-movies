import { useContext } from "react";
import useGeneratePageNumbers from "../../hooks/style-hooks/useGeneratePageNumbers";
import { pageContext } from "../../contexts/PageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetchItemData from "../../hooks/fetch-data-hooks/useFetchItemData";
import { Link } from "react-router-dom";
import { timeRangeContext } from "../../contexts/TimeRangeContext";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";

export default function PageTurner() {
    const fetchedData = useFetchItemData();
    const { pageNumber, setPageNumber } = useContext(pageContext);
    const { headerRange } = useContext(timeRangeContext);
    const { headerItem } = useContext(trendingHeaderFocusContext);

    const lastPage: number | undefined = fetchedData?.total_pages;
    const toBeRenderedNumbers: number[] = useGeneratePageNumbers({
        pageNumber,
        lastPage,
    });

    function changePage(page: number) {
        setPageNumber(page);
    }
    function goToPreviousPage(): void {
        if (pageNumber - 1 > 0) setPageNumber((p) => p - 1);
    }

    function goToNextPage(): void {
        if (lastPage && pageNumber + 1 < lastPage) setPageNumber((p) => p + 1);
    }

    return (
        <div className="mx-auto w-1/2 flex gap-3 p-2 justify-between rounded-2xl  mb-15  text-D-primary bg-L-tertiary dark:text-L-primary dark:bg-D-tertiary"
            title="pages">
            <button className="page-turner" onClick={goToPreviousPage}>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>

            {toBeRenderedNumbers.map((n, i) => (
                <Link key={i} to={`/trending/${headerItem}/${headerRange}/${n}`}>
                    <button className="page-turner" key={i} onClick={() => changePage(n)}>
                        {n.toString()}
                    </button>
                </Link>
            ))}
            <button className="page-turner" onClick={goToNextPage}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
}

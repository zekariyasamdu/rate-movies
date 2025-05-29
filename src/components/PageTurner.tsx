// Hooks
import { useContext } from "react"
import useFetchLocalData from "../hooks/fetch-data-hooks/useFetchLocalData"

import useGeneratePageNumbers from "../hooks/style-hooks/useGeneratePageNumbers"
// contexts
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext"
import { pageNumberContext } from "../contexts/PageNumberContext"
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"


export default function PageTurner() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const { pageNumber, setPageNumber } = useContext(pageNumberContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    const lastPage: number | undefined = fetchedData?.total_pages
    const toBeRenderedNumbes: (number)[] = useGeneratePageNumbers({ pageNumber, lastPage })

    function changePage(page: number) {
        setPageNumber(page)
    }
    function goToPreviousPage(): void {
        pageNumber - 1 > 0 ? setPageNumber(p => p - 1) : null;
    }

    function goToNextPage(): void {
        if (lastPage)
            pageNumber + 1 < lastPage ? setPageNumber(p => p + 1) : null;
    }


    
    return (
        <div className=" w-max h-max gap-3 p-2 justify-between rounded-2xl mt-30 mb-15 inline-block  text-D-primary bg-L-tertiary dark:text-L-primary dark:bg-D-tertiary"
            title="pages">
            <button className="page-turner"
                onClick={goToPreviousPage}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
            {toBeRenderedNumbes.map((n, i) => (
                <button className="page-turner"
                    key={i}
                    onClick={() => changePage(n)}>{n.toString()}</button>))}
            <button className="page-turner"
                onClick={goToNextPage}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    )
}


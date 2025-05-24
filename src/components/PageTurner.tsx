import { useContext } from "react"
import useFetchLocalData from "../hooks/useFetchLocalData"
import { contentUpdatedContext } from "../contexts/ContentUpdatedContext"
import { pageNumberContext } from "../contexts/PageNumberContext"


export default function PageTurner() {

    const { newDataFetched } = useContext(contentUpdatedContext)
    const fetchedData = useFetchLocalData(newDataFetched)
    const { pageNumber, setPageNumber } = useContext(pageNumberContext)
    const lastPage: number | undefined = fetchedData?.total_pages

    function diplayingPageNumbers({ pageNumber, lastPage }: { pageNumber: number; lastPage: number | undefined }): (number)[] {
        let toBeDisplayedNumbers: (number)[];

        let currentPage: number = pageNumber;
        let secondNumber: number = 1 + currentPage;
        let thired: number = 2 + currentPage;
        if (typeof (lastPage) === "number") {
            if (currentPage === lastPage) {
                toBeDisplayedNumbers = [currentPage]
                return toBeDisplayedNumbers
            }
            if (secondNumber === lastPage) {
                toBeDisplayedNumbers = [currentPage, lastPage]
                return toBeDisplayedNumbers
            }

            if (thired === lastPage) {
                toBeDisplayedNumbers = [currentPage, secondNumber,]
                return toBeDisplayedNumbers
            }

            toBeDisplayedNumbers = [currentPage, secondNumber, thired, lastPage]
            return toBeDisplayedNumbers;
        }
        toBeDisplayedNumbers = [0];
        return toBeDisplayedNumbers;
    }

    const toBeRenderedNumbes: (number)[] = diplayingPageNumbers({ pageNumber, lastPage })
    function changePage(page: number) {
        setPageNumber(page)
    }

    console.log(fetchedData)
    return (
        <div className="absolute w-max h-max flex m-auto left-0 right-0 top-20">
            <button>previous </button>
            {toBeRenderedNumbes.map((n, i) => (<p key={i} onClick={() => changePage(n)}>,{n.toString()}</p>))}
            <button>next</button>
        </div>
    )
}


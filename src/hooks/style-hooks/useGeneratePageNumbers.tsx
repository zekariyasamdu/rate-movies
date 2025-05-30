

export default function useGeneratePageNumbers({ pageNumber, lastPage }: { pageNumber: number; lastPage: number | undefined }): (number)[] {
    
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
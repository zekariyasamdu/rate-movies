


type aStatetWithNumber = {
    value: number,
    setterFunc: React.Dispatch<React.SetStateAction<number>>
}


type aStateWithString = {
    value: string,
    setterFunc: React.Dispatch<React.SetStateAction<string>>
}

interface childrenProps {
    children: React.ReactNode
}

interface fetchedLocalStorageType {
    page: number,
    results: [],
    total_pages: number,
    total_results: number

}

interface eachArrayType {
    title: string,
    backdrop_path:string,
    poster_path: string
}


export type { aStatetWithNumber, aStateWithString, childrenProps, fetchedLocalStorageType, eachArrayType }

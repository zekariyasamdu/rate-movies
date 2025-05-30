


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
    results:  [],
    total_pages: number,
    total_results: number

}

interface eachMovieArrayType {
    title: string,
    backdrop_path:string,
    poster_path: string,
    vote_average: number
}

interface eachPersonArrayType {
    profile_path: string,
    name:string,
    popularity: number,
}



export type { aStatetWithNumber, aStateWithString, childrenProps, fetchedLocalStorageType, eachMovieArrayType, eachPersonArrayType }

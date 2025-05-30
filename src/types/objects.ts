
interface fetchedLocalStorageType {
    page: number,
    results: [],
    total_pages: number,
    total_results: number

}

interface eachMovieArrayType {
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
}

interface eachPersonArrayType {
    profile_path: string,
    name: string,
    popularity: number,
}

interface eachTvArrayType {

    poster_path: string,
    name: string,
    popularity: number,
}




export type { fetchedLocalStorageType, eachMovieArrayType, eachPersonArrayType, eachTvArrayType }

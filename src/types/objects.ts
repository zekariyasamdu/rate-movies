
interface fetchedLocalStorageType {
    page: number,
    results: ItemType[],
    total_pages: number,
    total_results: number

}

export type ItemType = eachMovieArrayType | eachPersonArrayType 

export const isMovie = (item: ItemType): item is eachMovieArrayType => {
    return (item as eachMovieArrayType).poster_path !== undefined;
}

export const isPerson = (item: ItemType): item is eachPersonArrayType => {
    return (item as eachPersonArrayType).profile_path !== undefined;
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



export type { fetchedLocalStorageType, eachMovieArrayType, eachPersonArrayType }

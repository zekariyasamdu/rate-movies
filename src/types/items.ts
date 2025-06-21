

export interface IMovie {
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
}

export interface IFetchedType {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number

}

interface videoObject {
    results : videoID[]
}

interface videoID {
    key: string
}

export interface IFetchedMovieType {
    title: string,
    overview: string,
    backdrop_path: string,
    genres: [],
    release_date: string,
    adult: boolean,
    homepage: string,
    videos: videoObject
}





export interface IMovie {
    id: number,
    title: string,
    release_date: string,
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

interface IvideoObject {
    results : IvideoID[]
}

interface IvideoID {
    key: string
}


export interface IGenres{
    id: number,
    name: string
}

export interface IFetchedMovieType {
    title: string,
    overview: string,
    backdrop_path: string,
    genres: IGenres[],
    release_date: string,
    adult: boolean,
    homepage: string,
    videos: IvideoObject,
    vote_average: number
}




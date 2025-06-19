

export interface IMovie {
    id:string,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
}

export interface IPerson {
    id:string,
    profile_path: string,
    name: string,
    popularity: number,
}


export interface IFetchedType {
    page: number,
    results: ImdbItem[],
    total_pages: number,
    total_results: number

}

interface videoObject {
    results : videoID[]
}

interface videoID {
    key: string
}

export interface fetchedMovieType {
    title: string,
    overview: string,
    backdrop_path: string,
    genres: [],
    release_date: string,
    adult: boolean,
    homepage: string,
    videos: videoObject
}


export type ImdbItem = IMovie | IPerson;

export const isMovie = (item: ImdbItem): item is IMovie => {
    return (item as IMovie).poster_path !== undefined;
}

export const isPerson = (item: ImdbItem): item is IPerson => {
    return (item as IPerson).profile_path !== undefined;
}


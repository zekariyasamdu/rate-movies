
interface fetchedLocalStorageType {
    page: number,
    results: ImdbItem[],
    total_pages: number,
    total_results: number

}

export type ImdbItem = IMovie | IPerson 

export const isMovie = (item: ImdbItem): item is IMovie => {
    return (item as IMovie).poster_path !== undefined;
}

export const isPerson = (item: ImdbItem): item is IPerson => {
    return (item as IPerson).profile_path !== undefined;
}


interface IMovie {
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
}

interface IPerson {
    profile_path: string,
    name: string,
    popularity: number,
}



export type { fetchedLocalStorageType, IMovie, IPerson  }

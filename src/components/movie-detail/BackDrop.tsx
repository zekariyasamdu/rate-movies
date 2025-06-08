import useFetchMovieData from "../../hooks/fetch-data-hooks/useFetchMovieData"



export default function BackDrop() {
    const movieData = useFetchMovieData()
    
    return (
        <>
        <img src={`https://image.tmdb.org/t/p/w500${movieData}`}/>
        </>
    )
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
// components 
import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import TrendingMovies from "./pages/trending/TrendingMoviesPage";
import TrendingPeople from "./pages/trending/TrendingPeoplePage";
import TrendingTv from "./pages/trending/TrendingTvPage";


export default function AppRouters() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Home />}
                />
                <Route path="/search"
                    element={<Search/>}
                />

                {/* thrending routes */}
                <Route path="/trending/movies"
                    element={<TrendingMovies/>}
                />
                <Route path="/trending/people"
                    element={<TrendingPeople/>}
                />
                <Route path="/trending/tv"
                    element={<TrendingTv/>}
                />
            </Routes>
        </BrowserRouter>
    )
}
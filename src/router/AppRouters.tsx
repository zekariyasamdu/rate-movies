import { BrowserRouter, Route, Routes } from "react-router-dom";
// components 
import Home from "../pages/HomePage";
import Trending from "../pages/TrendingPage";
import Search from "../pages/SearchPage";


export default function AppRouters() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Home />}
                />
                <Route path="/trending"
                    element={<Trending/>}
                />
                <Route path="/search"
                    element={<Search/>}
                />
            </Routes>
        </BrowserRouter>
    )
}
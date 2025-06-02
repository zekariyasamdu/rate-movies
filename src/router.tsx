import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import Trending from "./pages/TrendingPage";


export const router = createBrowserRouter([
    {path: '/', Component: Home},
    {path: '/search', Component: Search},
    {path: '/trending', Component: Trending, 
        children: [
            {path: ':spItem'},
        ]
    }
])

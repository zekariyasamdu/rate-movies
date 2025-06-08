import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import Trending from "./pages/TrendingPage";
import Dashboard from "./pages/DashboardPage";
import Movie from "./pages/MovieDetailPage";


export const router = createBrowserRouter([
    { path: '/', Component: Dashboard },
    { path: '/home', Component: Home },
    { path: '/search', Component: Search },
    {path: ':spItem/:filmId', Component: Movie},
    {
        path: '/trending', Component: Trending,
        children: [
            {
                path: ':spItem',
                children: [
                    {
                        path: ':range',
                        children: [
                            {
                                path: ':page'
                            }
                        ]
                    }
                ]
            },
        ]
    }
])

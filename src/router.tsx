import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import Trending from "./pages/TrendingPage";
import Dashboard from "./pages/DashboardPage";
import Detail from "./pages/DetailPage";


export const router = createBrowserRouter([
    { path: '/', Component: Dashboard },
    { path: '/home', Component: Home },
    { path: '/search', Component: Search,
        children : [
            {path: ':query',
            }
        ]
    },
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
    },
    {path: ':spItem/:filmId', Component: Detail}
    
])

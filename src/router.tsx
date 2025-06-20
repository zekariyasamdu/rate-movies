import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import Detail from "./pages/DetailPage";
import TrendingPageProviders from "./pages/TrendingPageProviders";
import SearchPageProviders from "./pages/SearchPageProviders";


export const router = createBrowserRouter([
    { path: '/', Component: Dashboard },
    { path: '/home', Component: Home },
    { path: '/search', Component: SearchPageProviders,
        children: [
            {
                path: ':spItem',
                children: [
                    {
                        path: ':query',
                        children: [
                            {
                                path: ':page',
                                Component: SearchPageProviders
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        path: '/trending', Component: TrendingPageProviders,
        children: [
            {
                path: ':spItem',
                children: [
                    {
                        path: ':range',
                        children: [
                            {
                                path: ':page',
                                Component: TrendingPageProviders
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {path: ':spItem/:filmId', Component: Detail}
    
])

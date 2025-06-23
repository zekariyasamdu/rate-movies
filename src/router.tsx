import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import TrendingPageProviders from "./pages/TrendingPageProviders";
import SearchPageProviders from "./pages/SearchPageProviders";
import DetailPageProviders from "./pages/DetailPageProviders";
import SearchPageDashboardProviders from "./pages/SearchPageDashboardProvider";
import HomePageProviders from "./pages/HomePageProviders";


export const router = createBrowserRouter([
    { path: '/', Component: Dashboard },
    { path: '/home', Component: HomePageProviders },
    { path: '/search/dashboard', Component:  SearchPageDashboardProviders },
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
    {path: ':spItem/:filmId', Component: DetailPageProviders}
    
])

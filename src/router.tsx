import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import TrendingPageProviders from "./pages/trending-page/TrendingPageProviders";
import SearchPageProviders from "./pages/search-page/SearchPageProviders";
import DetailPageProviders from "./pages/detail-page/DetailPageProviders";
import SearchPageDashboardProviders from "./pages/search-page-dashboard/SearchPageDashboardProvider";
import HomePageProviders from "./pages/home-page/HomePageProviders";


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

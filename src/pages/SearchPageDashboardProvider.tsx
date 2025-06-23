import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import MediaProvider from "../components/context-provider/MediaProvider";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";
import { QueryProvider } from "../components/context-provider/QueryProvider";
import SearchPageDashboard from "./SearchPageDashboard";


export default function SearchPageDashboardProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <MediaProvider>
                    <NavBarProvider>
                        <QueryProvider>
                            <SearchPageDashboard/>
                        </QueryProvider>
                    </NavBarProvider>
                </MediaProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

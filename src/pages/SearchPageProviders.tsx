import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import MediaProvider from "../components/context-provider/MediaProvider";
import Search from "./SearchPage";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";
import { QueryProvider } from "../components/context-provider/QueryProvider";


export default function SearchPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <MediaProvider>
                    <NavBarProvider>
                        <QueryProvider>
                            <Search />
                        </QueryProvider>
                    </NavBarProvider>
                </MediaProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

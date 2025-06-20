import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import MediaProvider from "../components/context-provider/MediaProvider";
import Search from "./SearchPage";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";


export default function SearchPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <MediaProvider>
                    <NavBarProvider>

                        <Search />
                        
                    </NavBarProvider>
                </MediaProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

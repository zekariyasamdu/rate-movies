import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";
import Search from "./SearchPage";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";


export default function SearchPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <TrendingHeaderFocusProvider>
                    <NavBarProvider>
                        <Search />
                    </NavBarProvider>
                </TrendingHeaderFocusProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

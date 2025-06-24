import { LoadingProvider } from "../../components/context-provider/LoadingProvider";
import MediaProvider from "../../components/context-provider/MediaProvider";
import { NavBarProvider } from "../../components/context-provider/NavBarProvider";
import { QueryProvider } from "../../components/context-provider/QueryProvider";
import Home from "./HomePage";

export default function HomePageProviders() {
    return (
        <LoadingProvider>
            <NavBarProvider>
                <QueryProvider>
                    <MediaProvider>
                        <Home />
                    </MediaProvider>
                </QueryProvider>
            </NavBarProvider>
        </LoadingProvider>
    )
}

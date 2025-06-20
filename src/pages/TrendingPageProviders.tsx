import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import TimeRangeProvider from "../components/context-provider/TimeRangeProvider";
import MediaProvider from "../components/context-provider/MediaProvider";
import Trending from "./TrendingPage";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";
import { QueryProvider } from "../components/context-provider/QueryProvider";


export default function TrendingPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <TimeRangeProvider>
                    <MediaProvider>
                        <NavBarProvider>
                            <QueryProvider>
                                <Trending />
                            </QueryProvider>
                        </NavBarProvider>
                    </MediaProvider>
                </TimeRangeProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

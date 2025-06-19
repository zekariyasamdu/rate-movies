import { PageProvider } from "../components/context-provider/PageProvider";
import { LoadingProvider } from "../components/context-provider/LoadingProvider";
import TimeRangeProvider from "../components/context-provider/TimeRangeProvider";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";
import Trending from "./TrendingPage";
import { NavBarProvider } from "../components/context-provider/NavBarProvider";


export default function TrendingPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <TimeRangeProvider>
                    <TrendingHeaderFocusProvider>
                        <NavBarProvider>

                            <Trending />
                            
                        </NavBarProvider>
                    </TrendingHeaderFocusProvider>
                </TimeRangeProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

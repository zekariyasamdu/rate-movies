import { PageProvider } from "../../components/context-provider/PageProvider";
import { LoadingProvider } from "../../components/context-provider/LoadingProvider";
import MediaProvider from "../../components/context-provider/MediaProvider";
import { NavBarProvider } from "../../components/context-provider/NavBarProvider";
import Detail from "./DetailPage";
import SpecificIdProvider from "../../components/context-provider/SpecificIdProvider";


export default function DetailPageProviders() {
    return (
        <PageProvider>
            <LoadingProvider>
                <MediaProvider>
                    <NavBarProvider>
                        <SpecificIdProvider>

                            <Detail />
                            
                        </SpecificIdProvider>
                    </NavBarProvider>
                </MediaProvider>
            </LoadingProvider>
        </PageProvider>
    )
}

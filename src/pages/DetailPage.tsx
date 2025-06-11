
import SpecificIdProvider from "../components/context-provider/SpecificIdProvider";
import SideBar from "../components/shared/NavBar";
import TrendingHeaderFocusProvider from "../components/context-provider/TrendingHeaderFocusProvider";
import DetailContainer from "../components/movie-detail/DetailContainer";
import ContaintDisplayLayout from "../components/layouts/ContaintDisplayLayout";
import FooterLayout from "../components/layouts/FooterLayout";
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";



export default function Detail() {
    return (
        <TrendingHeaderFocusProvider>
            <SpecificIdProvider>


                <RootLayout>
                    <SideLayout>
                        <Navbar />
                    </SideLayout>

                    <MainLayout>

                        <DetailContainer />

                    </MainLayout>

                </RootLayout>


            </SpecificIdProvider>
        </TrendingHeaderFocusProvider>

    )
}
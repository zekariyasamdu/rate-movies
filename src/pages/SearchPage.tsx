import ContaintDisplayLayout from "../components/layouts/ContaintDisplayLayout";
import FooterLayout from "../components/layouts/FooterLayout";
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import MediaType from "../components/shared/MediaType";
import Navbar from "../components/shared/NavBar";
import SearchInput from "../components/shared/SearchInput";



export default function Search() {

    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>

            <MainLayout>
                <HeaderLayout>
                    <SearchInput/>
                    <MediaType />
                </HeaderLayout>

                <ContaintDisplayLayout>
                </ContaintDisplayLayout>

                <FooterLayout>
                </FooterLayout>
            </MainLayout>

        </RootLayout>
    )
}
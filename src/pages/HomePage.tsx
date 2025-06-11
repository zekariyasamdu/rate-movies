import ContaintDisplayLayout from "../components/layouts/ContaintDisplayLayout";
import FooterLayout from "../components/layouts/FooterLayout";
import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import SideBar from "../components/shared/NavBar";



export default function Home() {
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>

            <MainLayout>
                <HeaderLayout>
                </HeaderLayout>

                <ContaintDisplayLayout>
                </ContaintDisplayLayout>

                <FooterLayout>
                </FooterLayout>
            </MainLayout>

        </RootLayout>
    )
}
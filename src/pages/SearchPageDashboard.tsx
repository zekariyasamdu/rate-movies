import HeaderLayout from "../components/layouts/HeaderLayout";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import SearchInput from "../components/shared/SearchInput";


export default function SearchPageDashboard() {
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>

            <MainLayout>
                <HeaderLayout>
                    <SearchInput />
                </HeaderLayout>

            </MainLayout>

        </RootLayout>
    )
}

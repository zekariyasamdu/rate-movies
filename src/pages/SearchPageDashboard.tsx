import RootLayout from "../components/layouts/RootLayout";
import  SearchDashboardLayout from "../components/layouts/SearchDashboardLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import SearchInput from "../components/shared/SearchInput";
import AppName from "../components/static-data/AppName";
import Contact from "../components/static-data/Contact";


export default function SearchPageDashboard() {
    return (

        <RootLayout>
            <SideLayout>
                <Navbar />
            </SideLayout>
            <SearchDashboardLayout>
                <AppName className="text-5xl m-t mt-35" />
                <SearchInput />
                <Contact/>
            </SearchDashboardLayout>
        </RootLayout>
    )
}

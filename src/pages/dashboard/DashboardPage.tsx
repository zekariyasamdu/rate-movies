import RootLayout from "../../components/layouts/RootLayout";
import SideLayout from "../../components/layouts/SideLayout";
import Navbar from "../../components/shared/NavBar";


export default function Dashboard() {
    return (
        <RootLayout>
            <SideLayout>
                <Navbar/>
            </SideLayout> 


        </RootLayout>

    )
}
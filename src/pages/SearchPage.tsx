import SideBarFocusProvider from "../components/context-provider/SideBarFocusProvider";
import SideBar from "../components/shared/SideBar";



export default function Search() {
    
    return (
        <>
            <SideBarFocusProvider>

                <SideBar />

            </SideBarFocusProvider>
        </>
    )
}
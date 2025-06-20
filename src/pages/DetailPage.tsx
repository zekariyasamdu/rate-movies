import DetailContainer from "../components/movie-detail/DetailContainer";
import MainLayout from "../components/layouts/MainLayout";
import RootLayout from "../components/layouts/RootLayout";
import SideLayout from "../components/layouts/SideLayout";
import Navbar from "../components/shared/NavBar";
import useFetchSimilarData from "../hooks/fetch-data-hooks/useFetchSimilarData";
import ItemsContainer from "../components/item-card/ItemsContainer";



export default function Detail() {
    const similarData = useFetchSimilarData();

    return (


                <RootLayout>

                    <SideLayout>
                        <Navbar />
                    </SideLayout>

                    <MainLayout>

                        <DetailContainer />
                        <ItemsContainer data={similarData}/>

                    </MainLayout>
                </RootLayout>


    )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components 
import Home from "../pages/HomePage";


export default function AppRouters(){ 
    
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"
            element={<Home/>}
            />
        </Routes>
        </BrowserRouter>        
    )
}
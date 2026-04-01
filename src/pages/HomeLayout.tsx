import {Outlet} from "react-router-dom";
import {Footer, Header, Navbar} from "@/components";


export const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

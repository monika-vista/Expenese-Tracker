import { Outlet } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
function Rooter(){
    return (
        <>
        <MainHeader  />
        <main >
        <Outlet /></main>
        </>
    );
}

export default Rooter;
import Hader from "./Hader"
import Sidebaar from "./Sidebaar"
import DashboardPage from "../Client/DashboardPage"
import ExpenseCreate from "../Client/ExpenseCreate"
import { Outlet } from 'react-router-dom';

const ClientHandel = () =>{

   return(
        <>
            <Hader />
            <div className= "md:flex flex-2">
                <Sidebaar />
                 <div className=" w-full h-screen bg-gray-950 overflow-x-hidden scrollbar-hide">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default ClientHandel
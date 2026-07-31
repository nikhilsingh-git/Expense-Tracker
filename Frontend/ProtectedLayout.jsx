
import { Outlet } from "react-router-dom";
import ContextData from "./src/components/context/ProfileContext";
import WalletData from "./src/components/context/WalletContext";
import ExpenseData from "./src/components/context/ExpenseContext";



const ProtectedLayout = () =>{


  return (

    <ContextData>
      <WalletData>
        <ExpenseData>
          <Outlet />
        </ExpenseData>
      </WalletData>
    </ContextData>

  );

}



export default ProtectedLayout
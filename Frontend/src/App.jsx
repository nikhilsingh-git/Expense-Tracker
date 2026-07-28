import FrontPage from "./components/FrontPage/FrontPage";
import AuthPage from "./components/Auth/AuthPage";
import Register from "./components/Auth/Register";
import ClientHandel from "./components/Expense/ClientHandel";
import CreateProfile from "./components/Profile/CreateProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseCreate from "./components/Client/ExpenseCreate";
import DashboardPage from "./components/Client/DashboardPage";
import View from "./components/Client/View";
import Analytics from "./components/Client/Analytics";
import ContextData from "./components/context/ProfileContext";
import ExpenseData from "./components/context/ExpenseContext";
import WalletData from "./components/context/WalletContext";
import EditProfile from "./components/Expense/EditProfilr";


const app = () =>{

return(
  <>
  
  <BrowserRouter>
    <ContextData>
      <WalletData>
      <ExpenseData>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path ='/api/auth/login' element={<AuthPage />} />
        <Route path ='/api/auth/register' element={<Register />} />
        <Route path='/api/auth/create-profile' element={<CreateProfile />} />
        <Route path='/api/auth/view' element={<View />}/>
        <Route path='/api/auth/client-handel' element={<ClientHandel />}>   
          <Route index element={<DashboardPage />} />
          <Route path ='create-expence' element={<ExpenseCreate />} />
          <Route path='view-transactions' element={<View />} />
          <Route path='analytics' element={<Analytics />} />
        </Route>
        <Route path="/edit-profile" element={<EditProfile />}/>
      </Routes>
      </ExpenseData>
      </WalletData>
     </ContextData>
    </BrowserRouter>


    {/* <FrontPage /> 
    <AuthPage />
    <Register /> */}
    {/* <ClientHandel /> */}
    {/* <CreateProfile /> */}
    {/* <ExpenseCreate /> */}
    {/* <EditExpense></EditExpense> */}
    {/* <EditIncome></EditIncome> */}
    {/* <EditProfile></EditProfile> */}

  </>
)
}

export default app;
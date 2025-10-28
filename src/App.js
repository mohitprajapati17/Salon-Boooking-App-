
import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";

import Navbar from "./customer/NavBar/Navbar";  
import { Routes, Route } from "react-router-dom";

import CustomerRoutes from "./routes/CustomerRoutes";
import Login from "./Auth/LoginForm";
import Auth from "./Auth/Auth";
import SignupForm from "./Auth/SignupForm";





function App() {
  return (
    <ThemeProvider theme={greenTheme}>
    <Routes>

    <Route path="/login" element={<Auth/>}/> 
    <Route path="/register" element={<Auth/>}/>
    <Route path="/*" element={<CustomerRoutes/>}/>
    

    </Routes>
    
    </ThemeProvider>
  );
}

export default App;

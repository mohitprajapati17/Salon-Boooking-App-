
import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";

import Navbar from "./customer/NavBar/Navbar";  
import { Routes, Route } from "react-router-dom";

import CustomerRoutes from "./routes/CustomerRoutes";
import { Login } from "@mui/icons-material";
import SignupForm from "./Auth/SignupForm";





function App() {
  return (
    <ThemeProvider theme={greenTheme}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/> 
    <Route path="/register" element={<SignupForm/>}/>
    <Route path="/*" element={<CustomerRoutes/>}/>
    

    </Routes>
    
    </ThemeProvider>
  );
}

export default App;

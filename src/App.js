
import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";

import Navbar from "./customer/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";

import CustomerRoutes from "./routes/CustomerRoutes";





function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      
    
  
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/*" element={<CustomerRoutes/>}/>
    

    </Routes>
    
    </ThemeProvider>
  );
}

export default App;

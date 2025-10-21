
import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";
import SalonDetails from "./Salon/SalonDetails/SalonDetails";
import Review from "./customer/Review/Review";
import Booking from "./customer/Booking/Booking";
import Notifications from "./customer/Notification/Notifications";
import Navbar from "./customer/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import SalonDashboard from "./seller/SalonDashboard";
import CustomerRoutes from "./routes/CustomerRoutes";





function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <Navbar/>
    
  
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/*" element={<CustomerRoutes/>}/>
    

    </Routes>
    
    </ThemeProvider>
  );
}

export default App;

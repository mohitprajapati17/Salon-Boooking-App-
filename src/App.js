
import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";
import SalonDetails from "./Salon/SalonDetails/SalonDetails";
import Review from "./customer/Review/Review";
import Booking from "./customer/Booking/Booking";
import Notifications from "./customer/Notification/Notifications";
import Navbar from "./customer/NavBar/Navbar";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <Navbar/>
      <Home/>
    {/* <SalonDetails/> */}
    {/* <Booking/> */}
    {/* <Notifications/> */}
    
    </ThemeProvider>
  );
}

export default App;


import Home from "./customer/Home/Home";
import './App.css';

import greenTheme from "./theme/greentheme";
import { ThemeProvider } from "@mui/material";
import SalonDetails from "./Salon/SalonDetails/SalonDetails";
import Review from "./customer/Review/Review";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
    <SalonDetails/>

    
    </ThemeProvider>
  );
}

export default App;

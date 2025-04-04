import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ScrollToTop from "./components/common/ScroollToTop";
import AppLayout from "./layout/AppLayout";
import Home from "./Pages/Home";
import { SidebarProvider } from "./context/SidebarContext";
import Calendar from "./Pages/Calendar";
import UserProfiles from "./Pages/UserProfiles";
import Sellers from "./Pages/Sellers";
import Customers from "./Pages/Customers";
import Products from "./Pages/Products"

const App = () => {
  return (
    <SidebarProvider> 
      <Router>
        <ScrollToTop />
        <Routes>

          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route index path="/calendar" element={<Calendar />} />
            <Route index path="/customers" element={<Customers />} />
            <Route index path="/sellers" element={<Sellers />} />
            <Route index path="/profile" element={<UserProfiles />} />
            <Route index path="/products" element={<Products/>} />

          </Route>

          <Route index path="/signin" element={<SignIn />} />

        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;

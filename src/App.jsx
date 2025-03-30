import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ScrollToTop from "./components/common/ScroollToTop";
import AppLayout from "./layout/AppLayout";
import Home from "./Pages/Home";
import { SidebarProvider } from "./context/SidebarContext";
import Calendar from "./Pages/Calendar";
import UserProfiles from "./Pages/UserProfiles";
import Sellers from "./Pages/Sellers";

const App = () => {
  return (
    <SidebarProvider> 
      <Router>
        <ScrollToTop />
        <Routes>

          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route index path="/calendar" element={<Calendar />} />
            <Route index path="/sellers" element={<Sellers />} />
            <Route index path="/profile" element={<UserProfiles />} />
          </Route>

          <Route index path="/signin" element={<SignIn />} />

        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;

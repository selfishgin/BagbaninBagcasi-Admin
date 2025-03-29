import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import ScrollToTop from "./components/common/ScroollToTop";
import AppLayout from "./layout/AppLayout";
import Home from "./Pages/Home";
import { SidebarProvider } from "./context/SidebarContext"; // ✅ SidebarProvider-i əlavə edirik!
import Calendar from "./layout/Calendar";

const App = () => {
  return (
    <SidebarProvider> {/* ✅ Bütün komponentlər kontekst daxilində işləyəcək */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route index path="/calendar" element={<Calendar />} />
          </Route>
          <Route index path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;

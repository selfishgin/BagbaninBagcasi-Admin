import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import ScrollToTop from './components/common/ScroollToTop';
import AppLayout from './layout/AppLayout';
import Home from './Pages/Home';
const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index path='/' element={<Home/>}></Route>
          </Route>

          <Route index path="/signin" element={<SignIn />} />
          
        </Routes>

      </Router>
    </>
  );
};

export default App;

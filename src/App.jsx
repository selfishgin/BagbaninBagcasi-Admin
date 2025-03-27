import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route index path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

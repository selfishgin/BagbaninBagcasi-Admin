import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

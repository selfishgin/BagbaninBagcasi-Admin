import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './auth/SignInForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
      </Routes>
    </Router>
  );
};

export default App;

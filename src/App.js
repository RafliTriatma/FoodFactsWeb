import LoginForm from './components/Pages/LoginForm';
import Homepage from './components/Pages/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/homepage' element={<Homepage/>} />
        </Routes>
      </Router>
  );
}

export default App;

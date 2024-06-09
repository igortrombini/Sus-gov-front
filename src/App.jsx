import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import IniciarAtendimento from './pages/IniciarAtendimento/IniciarAtendimento';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/iniciar-atendimento" element={<IniciarAtendimento />} />
      </Routes>
    </Router>
  );
};

export default App;

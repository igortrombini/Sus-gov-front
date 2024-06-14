import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import IniciarAtendimento from './pages/IniciarAtendimento/IniciarAtendimento';
import FilaAtendimento from './pages/FilaAtendimento/FilaAtendimento';
import { FilaProvider } from './context/FilaContext';

const App = () => {
  return (
    <FilaProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/iniciar-atendimento" element={<IniciarAtendimento />} />
        <Route path="/fila-atendimento" element={<FilaAtendimento />} />
      </Routes>
    </Router>
    </FilaProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import IniciarAtendimento from './pages/IniciarAtendimento/IniciarAtendimento';
import FilaAtendimento from './pages/FilaAtendimento/FilaAtendimento';
import Login from './pages/Login/Login';
import Triagem from './pages/Triagem/Triagem';
import AtendimentoMedico from './pages/AtendimentoMedico/AtendimentoMedico'; // Importe a nova página
import { AuthProvider } from './context/AuthContext';
import { FilaProvider } from './context/FilaContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <FilaProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute allowedRoles={['recepcao', 'enfermagem', 'medico']}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/iniciar-atendimento"
              element={
                <ProtectedRoute allowedRoles={['recepcao']}>
                  <IniciarAtendimento />
                </ProtectedRoute>
              }
            />
            <Route
              path="/fila-atendimento"
              element={
                <ProtectedRoute allowedRoles={['recepcao', 'enfermagem', 'medico']}>
                  <FilaAtendimento />
                </ProtectedRoute>
              }
            />
            <Route
              path="/triagem/:senha"
              element={
                <ProtectedRoute allowedRoles={['enfermagem']}>
                  <Triagem />
                </ProtectedRoute>
              }
            />
            <Route
              path="/atendimento-medico/:senha"
              element={
                <ProtectedRoute allowedRoles={['medico']}>
                  <AtendimentoMedico />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </FilaProvider>
    </AuthProvider>
  );
}

export default App;

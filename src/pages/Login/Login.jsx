import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LeftPanel,
  RightPanel,
  LoginBox,
  Title,
  Form,
  InputWrapper,
  Input,
  Button,
  ForgotPassword,
  RememberMe,
  StyledImage
} from './Login.styles';
import { FaUser, FaLock } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import ImageSrc from '../../assets/conta_govbr_v2.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/home');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <Container>
      <LeftPanel>
        <StyledImage src={ImageSrc} alt="Gov.br" />
      </LeftPanel>
      <RightPanel>
        <LoginBox>
          <Title>Acesso ao Sistema</Title>
          <Form onSubmit={handleSubmit}>
            <InputWrapper className="br-input">
              {!isUsernameFocused && <FaUser className="icon" />}
              <Input
                id="email"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setIsUsernameFocused(true)}
                onBlur={() => setIsUsernameFocused(false)}
                // Adicione estilo inline ou classe CSS para ajustar a posição do ícone
                style={{ paddingLeft: isUsernameFocused ? '8px' : '2.5rem' }} // Ajuste o paddingLeft quando o campo é focado ou não
              />
            </InputWrapper>
            <InputWrapper className="br-input">
              {!isPasswordFocused && <FaLock className="icon" />}
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                // Adicione estilo inline ou classe CSS para ajustar a posição do ícone
                style={{ paddingLeft: isPasswordFocused ? '8px' : '2.5rem' }} // Ajuste o paddingLeft quando o campo é focado ou não
              />
            </InputWrapper>
            <ForgotPassword>
              <span>Digite sua senha de segurança</span>
              <a href="#">Esqueceu sua senha?</a>
            </ForgotPassword>
            <RememberMe>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Manter-me conectado</label>
            </RememberMe>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" className="br-button primary">Entrar</Button>
          </Form>
        </LoginBox>
      </RightPanel>
    </Container>
  );
};

export default Login;

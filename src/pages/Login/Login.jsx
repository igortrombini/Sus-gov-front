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
  RememberMe
} from './Login.styles';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <Container>
      <LeftPanel>
        {/* Adicione sua imagem aqui, se necessário */}
        <p>Imagem ou outro conteúdo</p>
      </LeftPanel>
      <RightPanel>
        <LoginBox>
          <Title>Acesso ao Sistema</Title>
          <Form>
            <InputWrapper className="br-input">
              <FaUser className="icon" />
              <Input id="email" type="text" placeholder="Email" />
            </InputWrapper>
            <InputWrapper className="br-input">
              <FaLock className="icon" />
              <Input id="password" type="password" placeholder="Senha" />
            </InputWrapper>
            <ForgotPassword>
              <span>Digite sua senha de segurança</span>
              <a href="#">Esqueceu sua senha?</a>
            </ForgotPassword>
            <RememberMe>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Manter-me conectado</label>
            </RememberMe>
            <Button type="button" className="br-button primary">Entrar</Button>
          </Form>
        </LoginBox>
      </RightPanel>
    </Container>
  );
};

export default Login;

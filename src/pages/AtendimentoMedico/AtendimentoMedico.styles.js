import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-top: -1rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0.5rem;
  align-items: flex-start;
  label {
    margin-bottom: 0.5rem;
    text-align: left;
    font-weight: bold;
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
  min-height: 100px;
`;

export const TextAreaSintomas = styled(TextArea)`
  min-height: 200px;
`;

export const Button = styled.button`
  background-color: #0A3D62;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: #083358;
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 2;
  margin-top: 2rem;
`;

export const ActionButton = styled(Button)`
  background-color: #0A3D62;
  &:hover {
    background-color: #083358;
  }
`;

export const ButtonCancel = styled(Button)`
  background-color: transparent;
  border: 1px solid #0A3D62;
  color: #0A3D62;
  &:hover {
    background-color: #e6f2ff;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  &:before,
  &:after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: #e2e8f0;
  }
  &:before {
    margin-right: 1rem;
  }
  &:after {
    margin-left: 1rem;
  }
`;

export const DividerText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 2;
`;

export const GenderOptions = styled.div`
  display: flex;
  flex-direction: row;
  label {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    input {
      margin-right: 0.25rem;
    }
  }
`;

export const AlergiasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: span 2;
`;

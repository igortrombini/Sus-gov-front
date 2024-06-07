import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    color: gray;
  }
  .image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border: 1px dashed #e2e8f0;
    margin-top: 1rem;
    i {
      font-size: 2rem;
      color: #e2e8f0;
    }
  }
`;

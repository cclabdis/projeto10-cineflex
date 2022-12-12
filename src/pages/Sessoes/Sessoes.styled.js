import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
`;

export const Title = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    font-weight: 400;
  }
`;

export const CaixaDeEscolha = styled.div`
  p {
    font-size: 20px;
    font-weight: 400;
    width: 100%;
  }
  button {
    background: #e8833a;
    border-radius: 3px;
    color: white;
    padding: 10px 15px;
    margin-bottom: 20px;
    border: none;
    margin-right: 15px;
  }
`;
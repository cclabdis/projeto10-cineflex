import styled from "styled-components";

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

export const ListaDeFilmes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Filme = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  img {
    height: 193px;
    background: white;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
`;
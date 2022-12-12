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
    font-weight: 700;
    color: #247a6b;
    width: 150px;
    text-align: center;
  }
`;

export const InfoGroup = styled.div`
  h3 {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 15px;
  }
  p {
    width: 100%;
    font-weight: 400;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  background: #e8833a;
  border-radius: 3px;
  color: #000000;
  padding: 10px 20px;
  margin-top: 50px;
  border: none;
`;
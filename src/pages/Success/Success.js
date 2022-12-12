import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  InfoGroup,
  Title,
} from "./Success.styled";

export default function Success() {
  const order = JSON.parse(localStorage.getItem("order"));
  const navigate = useNavigate();

  function goHome() {
    localStorage.removeItem('order');
    navigate('/');
  }

  return (
    <Container>
      <Title>
        <h2>Pedido feito com sucesso!</h2>
      </Title>
      <InfoGroup data-test="movie-info">
        <h3>Filme e sessão</h3>
        <p>{order.title}</p>
        <p>{`${order.date} ${order.time}`}</p>
      </InfoGroup>
      <InfoGroup data-test="seats-info">
        <h3>Ingressos</h3>
        {order.seats.map((seat) => (
          <p key={seat}>Assento {seat}</p>
        ))}
      </InfoGroup>

      <InfoGroup data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: {order.name}</p>
        <p>CPF: {order.cpf}</p>
      </InfoGroup>

      <ButtonGroup>
        <Button onClick={() => goHome()} data-test="go-home-btn">
          Voltar para Home
        </Button>
      </ButtonGroup>

    </Container>
  );
}
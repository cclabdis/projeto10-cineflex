import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Seat from "../../components/Seat/Seat";

import { 
  useEffect, 
  useState 
} from "react";

import { 
  useNavigate, 
  useParams 
} from "react-router-dom";

import {
  Container,
  InputG,
  Label,
  Labels,
  SeatsContainer,
  Title,
} from "./Seats.styled";


export default function Seats() {
  const { id } = useParams();
  const [showtime, setShowtime] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsIndex, setSelectedSeatsIndex] = useState([]);
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`showtimes/${id}/seats`)

      .then(({ data }) => {
        setShowtime(data);
      })
      .catch((err) => {
        console.log("error", err.response.status);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, cpf, ids: selectedSeats };
    axios
      .post("/seats/book-many", data)
      .then(() => {
        const orderData = {
          name,
          cpf,
          date: showtime?.day.date,
          title: showtime?.movie.title,
          time: showtime?.name,
          seats: selectedSeatsIndex,
        };
        localStorage.setItem('order', JSON.stringify(orderData));
        navigate("/sucesso");
      })
      .catch((err) => {
        console.log("error", err.response.status);
      });
  };

  return (
    <>
      <Container>
        <Title>
          <p1>Selecione o(s) assento(s)</p1>
        </Title>
        <SeatsContainer>
          {showtime.seats?.map((seat, i) => {
            return (
              <Seat
                key={seat.id}
                index={i}
                seat={seat}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                selectedSeatsIndex={selectedSeatsIndex}
                setSelectedSeatsIndex={setSelectedSeatsIndex}
              />
            );
          })}
        </SeatsContainer>
        <Labels>
          <Label>
            <div className="selected"></div>
            <p>Selecionado</p>
          </Label>
          <Label>
            <div></div>
            <p>Disponível</p>
          </Label>
          <Label>
            <div className="unavailable"></div>
            <p>Indisponível</p>
          </Label>
        </Labels>
        <form action="" method="GET" onSubmit={(e) => handleSubmit(e)}>
          <InputG>
            <label htmlFor="name">Nome do comprador:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome..."
              required
              data-test="client-name"
            />
          </InputG>

          <InputG>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
              type="text"
              id="cpf"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
			        onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite um CPF no formato: xxx.xxx.xxx-xx"
              required
              data-test="client-cpf"
            />
          </InputG>

          <button type="submit" data-test="book-seat-btn">Reservar assento(s)</button>
        </form>
      </Container>
      <Footer
        img={showtime.movie?.posterURL}
        title={showtime.movie?.title}
        showtime={`${showtime.day?.weekday} - ${showtime.name}`}
      />
    </>
  );
}
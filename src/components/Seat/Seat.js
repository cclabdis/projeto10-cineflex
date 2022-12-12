import { 
  Button
 } from "./Seat.styled";

export default function Seat(props) {
  const isSelected = (id) => {
    return props.selectedSeats.includes(id);
  };
  const padNumber = 2;

  const selectSeat = (id, index) => {
    if (!isSelected(id)) {
      props.setSelectedSeats((selectedSeats) => [...selectedSeats, id]);
      props.setSelectedSeatsIndex((selectedSeatsIndex) => [
        ...selectedSeatsIndex,
        index,
      ]);
    } else {
      props.setSelectedSeats(props.selectedSeats.filter((seat) => seat !== id));
      props.setSelectedSeatsIndex(
        props.selectedSeatsIndex.filter((seatIndex) => seatIndex !== index)
      );
    }
  };

  const handleClick = () => {
    return props.seat.isAvailable
      ? selectSeat(props.seat.id, props.index + 1)
      : alert("Esse assento não está disponível");
  };

  const handleColor = () => {
    let colors = {
      bg: "#C3CFD9",
      border: "#808F9D",
    };

    if (isSelected(props.seat.id)) {
      colors = {
        bg: "#1AAE9E",
        border: "#0E7D71",
      };
    }

    if (!props.seat.isAvailable) {
      colors = {
        bg: "#FBE192",
        border: "#F7C52B",
      };
    }

    return colors;
  };

  return (
    <Button onClick={() => handleClick()} colors={handleColor()} data-test="seat">
      {String(props.index + 1).padStart(padNumber, "0")}
    </Button>
  );
}
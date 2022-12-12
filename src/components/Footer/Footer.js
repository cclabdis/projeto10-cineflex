import { 
  Container 
} from "./Footer.styled";

export default function Footer(prop) {
  return (
    <Container data-test="footer">
      <img src={prop.img} alt="ImagemQualquer" />
      <p>
        {prop.title}
        {prop.showtime ? (
          <>
            <br />
            {prop.showtime}
          </>
        ) : null}
      </p>
    </Container>
  );
}
import { 
  useEffect, 
  useState 
} from "react";

import { 
  Filme, 
  ListaDeFilmes, 
  Title 
} from "./Home.styled";

import { 
  Link 
} from "react-router-dom";

import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("movies")
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log("error", err.response.status);
      });
  }, []);

  return (
    <>
      <Title>
        <h2>Selecione o filme</h2>
      </Title>
      <ListaDeFilmes>
        {movies.map((movie) => {
          return (
            <Filme key={movie.id} data-test="movie">
              <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.overview} />
              </Link>
            </Filme>
          );
        })}
      </ListaDeFilmes>
    </>
  );
}
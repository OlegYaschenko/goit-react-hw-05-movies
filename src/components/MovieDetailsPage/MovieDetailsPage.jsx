import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import * as API from 'services/api';
import {
  Container,
  Button,
  List,
  Item,
  LinkWrapper,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [buttonLocation, setButtonLocation] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.getOneMovie(movieId).then(r => setMovie(r));
  }, [movieId]);

  useEffect(() => {
    if (location?.state?.from) {
      setButtonLocation(location.state.from);
    }
  }, [location?.state?.from]);

  return (
    movie && (
      <>
        <Button
          type="button"
          onClick={() => {
            navigate(buttonLocation || '/');
          }}
        >
          Go back
        </Button>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <List>
            <Item>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <p>{`User Score: ${movie.vote_average * 10}%`} </p>
            </Item>
            <Item>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </Item>
            <Item>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </Item>
          </List>
        </Container>
        <LinkWrapper>
          <h3>Additional information</h3>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </LinkWrapper>
        <Outlet />
      </>
    )
  );
};

export default MovieDetailsPage;

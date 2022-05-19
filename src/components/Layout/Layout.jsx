import { Outlet } from 'react-router-dom';
import { Container, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;

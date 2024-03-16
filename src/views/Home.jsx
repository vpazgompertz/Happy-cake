import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="container-home">
      <h1>
        Bienvenido a <span className="fw-bold">Happy Cake🍰</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <span className="icon">🎂</span>
    </Container>
  );
};
export default Home;

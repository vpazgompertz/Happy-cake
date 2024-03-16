import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="container-contact">
      <h3>Cuéntanos, ¿en qué te podemos ayudar?</h3>
      <Form.Group>
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Label>Descripción:</Form.Label>
        <Form.Control className="form-text" type="text"/>
      </Form.Group>
      <Button className="btn-submit" type="submit" variant="danger">Enviar</Button>
    </Container>
  );
};

export default Contacto;

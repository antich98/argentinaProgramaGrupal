import { Component } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Contacto = () => {
    return (
        <>
    <Form className='text-center w-50 m-auto mt-3'>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
        <Form.Text className="text-muted">
          Nunca vamos a compartir su información.
        </Form.Text>
      </Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Deja tu consulta."
          style={{ height: '100px' }}
        />
            <Button className="mt-3" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </>
    );
};

export default Contacto;
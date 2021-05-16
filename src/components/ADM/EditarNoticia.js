import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditarNoticia = () => {
  console.log(useParams().idNoticia);
  const codNoticia = useParams().idNoticia;
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [error, setError] = useState(false);
  const [noticia, setNoticia] = useState({});
  const URL = process.env.REACT_APP_API_URL + "/" + codNoticia;
  //variables de referencia
  const categoriaNoticiaRef = useRef("");
  const tituloNoticiaRef = useRef("");
  const autorNoticiaRef = useRef("");
  const fechaNoticiaRef = useRef("0");
  const contenidoNoticiaRef = useRef("");

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const noticiaSolicitada = await respuesta.json();
        setNoticia(noticiaSolicitada);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error!", "Intentelo de nuevo mas tarde!", "error");
    }
  }, []);

  const handleSubmit = () => {};
  return (
    <Container>
      <h1 className="text-center my-4">Editar Noticias</h1>
      <Form
        className="my-4 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Seleccione la Categoria</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => setCategoriaNoticia(e.target.value)}
          >
            <option>Seleccionar</option>
            <option>Actualidad</option>
            <option>Espectaculo</option>
            <option>Tecnología</option>
            <option>Deportes</option>
            <option>Política</option>
            <option>Economía</option>
            <option>Salud</option>
            <option>Fotografía</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Titulo de la Noticia"
            defaultValue={noticia.tituloNoticia}
            ref={tituloNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese al Autor de la Noticia"
            defaultValue={noticia.autorNoticia}
            ref={autorNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seleccione una Fecha</Form.Label>
          <Form.Control
            type="text"
            defaultValue={noticia.fechaNoticia}
            ref={fechaNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.File label="Seleccione una Imagen" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={noticia.contenidoNoticia}
            ref={contenidoNoticiaRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-4">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default EditarNoticia;

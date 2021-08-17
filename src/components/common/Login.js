import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import '../assets/css/login.css';
import { useHistory } from "react-router";
import { useEffect } from "react";

const Login = (props) => {
  const [usr, setUsr] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();
  
  useEffect(()=>{},[]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    // if(usr.trim() === '' || clave.trim() === ''){
    //   setError(true);
    //   return;
    // }else{
    //   setError(false);
    // }
    // const administrador = props.usuarios.find((usuario)=>usuario.usuario === usr);
    // if(typeof administrador === 'undefined'){
    //   setError(true);
    //   return;
    // }else{
    //   if(administrador.clave === clave){
    //     history.push('/adm');
    //     props.setAdminUser(true);
    //     console.log("correcto");
    //   }else{
    //     setError(false);
    //   }
    // }
  }



  return (
    <Container>
      <Form className="py-3 px-5 login mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Usuario" onChange={(e)=>setUsr(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setClave(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Recordar" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

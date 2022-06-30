import React, { Component } from 'react';
// import '../css/Login.css';
// import {AplicacionCrudApi} from "../components/AplicacionCrudApi"



export default Login = () => {
       


    return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
            
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
           
            />
            <br />
            <input
                type="submit"
                className="btn btn-primary"
                value="Login"
                onClick={window.location.href="./productos"}  
            />
          {/* <AplicacionCrudApi/>  */}
          </div>
        </div>
      </div>
        );
    
}

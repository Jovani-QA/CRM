import React from 'react';
import {Link}  from 'react-router-dom';
import './login.css';

function Login(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="Images/logo-small2.png" alt="" />
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>
        
        <button className="w-100 btn btn-lg btn-primary" type="submit">Acessar</button>

        <div className="login-links mt-5">
          <Link to="/app/resetpassword" className="mx-3">Esqueci minha senha</Link>
          <Link to="/app/cadastro" className="mx-3">Criar uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
      </form>
    </div>
  }

export default Login;
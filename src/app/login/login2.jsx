import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './login2.css';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../Config/firebase'; // Assuming this imports app


function Login2() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');

  function LoginUsuario(){
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
        setSucesso('S');
      })
      .catch((error) => {
        setSucesso('N');
      });
  } 
  



  function alterarEmail(event){
    setEmail(event.target.value);
  }


  function alterarSenha(event){
    setSenha(event.target.value);
  }

  

  return (
    <div className="d-flex align-items-center justify-content-center form-container">
      <form className="form-signin">
     
        <img className="mb-4" src="Images/logo-small2.png" alt="" />
        <input className="btn btn-primary" type="reset" value="Voltar"></input>
        
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <h1 className="h3 mb-3 fw-normal">{email}- {senha}</h1>

        <div className="form-wrapper">
          <div className="form-floating mb-3">
            <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
            <label htmlFor="floatingInput">E-mail</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button onClick= {LoginUsuario}className="w-100 btn btn-lg btn-primary mb-3" type="button">Acessar</button>
        </div>

        { sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}
        { sucesso === 'S' ? <div className="alert alert-success" role="alert">Login realizado com sucesso</div> : null}
       { /* sucesso === 'S' ? <Redirect to='/app/home' /> : null*/}
        

        <div className="login-links">
          <a href="#" className="mx-3">Esqueci minha senha</a>
          <Link to='/app/cadastro' className="mx-3">Criar uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por JovaTech</p>
      </form>
    </div>
  );
}

export default Login2;

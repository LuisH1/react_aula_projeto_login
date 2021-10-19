import React from "react";
import "./login.css"

export default function Login(){

    function mostrarMensagem(){
        alert("Fazendo Login.")
    }


    return(
        <div className="Login-container">
            <div id="div-imagem">
                <img id="imagem" alt="" src="https://www.alura.com.br/assets/api/formacoes/512/front-end.png" />
            </div>
            <div>
            <form className="form">
                <label id="titulo">Member Login</label>
                <div className="usuario">
                    <input type="text" name="username" placeholder="Nome do usuário"/>
                </div>
                <div className="senha">
                    <input type="passaword" name="senha" placeholder="Senha"/>
                </div>
                <button className="botao" onClick={() => mostrarMensagem()}>LOGIN</button>
                <p className="esqueceu">Esqueceu sua senha? <a target="_blank" href=" http://google.com ">Clique Aqui</a></p>
            </form>
            </div>
        </div>
    );
}
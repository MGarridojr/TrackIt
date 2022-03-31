import Logo from "../components/Logo";
import styled from "styled-components";
import CredentialsButton from "../components/CredentialsButton";
import CredentialsText from "../components/CredentialsText";
import CredentialsInput from "../components/CredentialsInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login({saveToken}) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const userData = {
        email: email,
        password: senha
    }
    function sendLogin(event){
        event.preventDefault();

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", userData)
        .then(
            (response)=> {
                const {data} = response
                saveToken(data.token)
            }
        )
        .catch(console.logo("erro"))

    }
    return (
        <LoginScreen>
            <Logo />
            <form onSubmit={sendLogin}>
            <CredentialsInput text="email" change={(info)=>{
            setEmail(info.target.value)
        }}></CredentialsInput>
            <CredentialsInput text="senha" change={(info)=>{
            setSenha(info.target.value)
        }}></CredentialsInput>
            <CredentialsButton text="entrar"></CredentialsButton>
            </form>
            <Link to="/cadastro" style={{textDecoration: 'none'}}>
            <CredentialsText text="Não tem uma conta? Cadrastre-se!"></CredentialsText>
            </Link>
        </LoginScreen>
    )


}
const LoginScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;


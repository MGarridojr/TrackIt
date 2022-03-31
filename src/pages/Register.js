import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CredentialsButton from "../components/CredentialsButton";
import CredentialsInput from "../components/CredentialsInput";
import CredentialsText from "../components/CredentialsText";
import Logo from "../components/Logo";
export default function Register(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const userData = {
        email: email,
        name: nome,
        image: foto,
        password: senha
    }
    function sendRegister(event){
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData)
        promise.then(console.log("ihhh registrou"))          
        promise.catch(console.log("erro"))

    }
    
    return(
        <RegisterScreen>
            <Logo />
            <form onSubmit={sendRegister}>

            <CredentialsInput text="email" change={(info)=>{
            setEmail(info.target.value)
        }} />
            <CredentialsInput text="senha" change={(info)=>{
            setSenha(info.target.value)
        }} />
            <CredentialsInput text="nome" change={(info)=>{
            setNome(info.target.value)
        }} />
            <CredentialsInput text="foto" change={(info)=>{
            setFoto(info.target.value)
        }} />
            <CredentialsButton text="Cadastrar"/>
            </form>
            <Link to="/" style={{textDecoration: 'none'}}>
            <CredentialsText text="Já tem uma conta? Faça login!"/>            
            </Link>
        </RegisterScreen>
    )
}
const RegisterScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;

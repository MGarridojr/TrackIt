import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsText from "../components/credentials/CredentialsText";
import Logo from "../components/Logo";
export default function Register(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const navigate = useNavigate()
    const userData = {
        email: email,
        name: nome,
        image: foto,
        password: senha
    }
    function sendRegister(event){
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData)
        promise.then(navigate("/"))          
        promise.catch(console.log("erro"))

    }
    
    return(
        <RegisterScreen>
            <Logo />
            <Form onSubmit={sendRegister}>

            <CredentialsInput type="email" text="email" change={(info)=>{
            setEmail(info.target.value)
        }} />
            <CredentialsInput type="password" text="senha" change={(info)=>{
            setSenha(info.target.value)
        }} />
            <CredentialsInput type="text" text="nome" change={(info)=>{
            setNome(info.target.value)
        }} />
            <CredentialsInput type="url" text="foto" change={(info)=>{
            setFoto(info.target.value)
        }} />
            <CredentialsButton text="Cadastrar"/>
            </Form>
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
const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`    

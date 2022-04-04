import Logo from "../components/Logo";
import styled from "styled-components";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsText from "../components/credentials/CredentialsText";
import CredentialsInput from "../components/credentials/CredentialsInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import Context from "../context/Context";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { token, setToken, userImage, setUserImage } = useContext(Context)
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
                setToken(data.token)
                setUserImage(data.image)
                localStorage.setItem("email", userData.email) 
                localStorage.setItem("password", userData.password)
                navigate("/habitos")
            }
        )
        .catch(console.log("erro"))

    }
    return (
        <LoginScreen>
            <Logo />
            <Form onSubmit={sendLogin}>
            <CredentialsInput type="email" text="email" change={(info)=>{
            setEmail(info.target.value)
        }}></CredentialsInput>
            <CredentialsInput type="password" text="senha" change={(info)=>{
            setSenha(info.target.value)
        }}></CredentialsInput>
            <CredentialsButton text="entrar"></CredentialsButton>
            </Form>
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
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`    


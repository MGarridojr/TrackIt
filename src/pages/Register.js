import { Link } from "react-router-dom";
import styled from "styled-components";
import CredentialsButton from "../components/CredentialsButton";
import CredentialsInput from "../components/CredentialsInput";
import CredentialsText from "../components/CredentialsText";
import Logo from "../components/Logo";
export default function Register(){
    return(
        <RegisterScreen>
            <Logo />
            <CredentialsInput text="email"/>
            <CredentialsInput text="senha"/>
            <CredentialsInput text="nome"/>
            <CredentialsInput text="foto"/>
            <CredentialsButton text="Cadastrar"/>
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

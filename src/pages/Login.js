import Logo from "../components/Logo";
import styled from "styled-components";
import CredentialsButton from "../components/CredentialsButton";
import CredentialsText from "../components/CredentialsText";
import CredentialsInput from "../components/CredentialsInput";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <LoginScreen>
            <Logo />
            <CredentialsInput text="email"></CredentialsInput>
            <CredentialsInput text="senha"></CredentialsInput>
            <CredentialsButton text="entrar"></CredentialsButton>
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


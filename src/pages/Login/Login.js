import Logo from "../../components/Logo";
import styled from "styled-components";
import CredentialsButton from "../../components/CredentialsButton";
import CredentialsText from "../../components/CredentialsText";

export default function Login() {
    return (
        <LoginScreen>
            <Logo />
            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <CredentialsButton text="entrar"></CredentialsButton>
            <CredentialsText text="Não tem uma conta? Cadrastre-se!"></CredentialsText>
        </LoginScreen>
    )


}
const LoginScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;
    
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 2%;
    `;
import styled from "styled-components";
export default function CredentialsButton(props){
    return(
        <CredentialButton>{props.text}</CredentialButton>
    )
}
const CredentialButton = styled.button`
    width: 318px;
    height: 45px;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`;
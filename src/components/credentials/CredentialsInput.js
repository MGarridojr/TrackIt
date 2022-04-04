import styled from "styled-components";
import "@fontsource/lexend-deca"
export default function CredentialsInput(props){
    return(
        <CredentialInput placeholder={props.text} type={props.type} onChange={props.change}></CredentialInput>
    )
}
const CredentialInput = styled.input`
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
import styled from "styled-components";
import "@fontsource/lexend-deca"
export default function CredentialsText(props){
    return(
        <Text>{props.text}</Text>
    )
}
const Text = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`;
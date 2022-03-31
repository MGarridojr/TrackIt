import logo from "./../assets/logo.png"
import styled from "styled-components"
export default function Logo(){
    return <LogoStyle src={logo} alt="logo" />
       
}
const LogoStyle = styled.img`
    margin-top: 10%;
    margin-bottom: 5%;
`;
import styled from "styled-components";
import "@fontsource/playball"
import { useContext } from "react";
import Context from "../context/Context";
export default function Header(){
    const {UserImage} = useContext(Context)
    return(
        <Div>
        <LogoStyle>TrackIt</LogoStyle>
        <Image src={UserImage} alt="userImage" />
        </Div>        
        )
        

}

const LogoStyle = styled.p`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;
`;
const Image = styled.img`

`;
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #126BA5;
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;
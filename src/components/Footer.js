import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import "@fontsource/lexend-deca"
export default function Footer() {
    const value= 60
    return(
        <Div>
            <p>Hábitos</p>
            <Today>
            <CircularProgressbar
                value={value}
                text="hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                })}
            />
            </Today>
            <p>Histórico</p>

        </Div>
    )
}

const Div = styled.div`
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    > p{
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
    }
`;
const Today = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 50px;
`
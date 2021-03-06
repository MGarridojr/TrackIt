import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import "@fontsource/lexend-deca"
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Context from "../context/Context";
export default function Footer() {
    const { percentage, CatchTodayHabit } = useContext(Context)
    useEffect(() => {
        CatchTodayHabit()
    }, []
    )
    return (
        <Div>
            {percentage ?
                <>
                    <Link to="/habitos" style={{ textDecoration: 'none' }}>
                        <FooterText>Hábitos</FooterText>
                    </Link>
                    <Link to="/hoje" style={{ textDecoration: 'none' }}>
                        <Today>
                            <CircularProgressbar
                                value={percentage.base}
                                maxValue={percentage.total}
                                text="hoje"
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: `rgba(255, 255, 255, ${percentage.base / percentage.total * 100})`,
                                    trailColor: "transparent",
                                })}
                            />
                        </Today>
                    </Link>
                    <FooterText>Histórico</FooterText>
                </>
                : <></>
            }

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
    
`;
const FooterText = styled.p`
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    
`
const Today = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 50px;
`

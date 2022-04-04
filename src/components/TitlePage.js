import styled from "styled-components";
import "@fontsource/lexend-deca"
import { useContext } from "react";
import Context from "../context/Context";
export default function TitlePage() {
    const {setAddHabit} = useContext(Context)

    return (
        <>
            <Title>
                <p>Meus Hábitos</p>
                <button onClick={()=>{setAddHabit(true)}}>+</button>
            </Title>
        </>
    )
}
const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding-top: 85px;
margin-bottom: 10px;

    > p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    > button{
        font-family: 'Lexend Deca';
        width: 40px;
        height: 35px;
        border-radius: 4.63636px;
        background-color: #52B6FF;
        border: none;
        color: #FFFFFF;
        font-style: bold;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        text-align: center;
    }
`

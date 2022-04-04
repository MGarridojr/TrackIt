import axios from "axios";
import { useContext } from "react";
import "@fontsource/lexend-deca"
import styled from "styled-components";
import Context from "../../context/Context";
import trash from "./../../assets/trash.svg"
export default function HabitsArray({ id, nome, dias }) {
    const { token, CatchHistory } = useContext(Context);

    function DeleteHabit() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        .then((response) => {
            CatchHistory();
        })
        .catch((err) => {
            const { response } = err;
            const { data } = response;
            const { message } = data;
            alert(message);
        })
    }

    return (
        <ARTICLE>
            <p>{nome}</p>
            <div>
                {dias.includes(0) ? <Select>D</Select> : <NotSelect>D</NotSelect>}
                {dias.includes(1) ? <Select>S</Select> : <NotSelect>S</NotSelect>}
                {dias.includes(2) ? <Select>T</Select> : <NotSelect>T</NotSelect>}
                {dias.includes(3) ? <Select>Q</Select> : <NotSelect>Q</NotSelect>}
                {dias.includes(4) ? <Select>Q</Select> : <NotSelect>Q</NotSelect>}
                {dias.includes(5) ? <Select>S</Select> : <NotSelect>S</NotSelect>}
                {dias.includes(6) ? <Select>S</Select> : <NotSelect>S</NotSelect>}
            </div>
            <img
                src={trash}
                alt="trash"
                onClick={() => {
                    const confirmar = window.confirm("Deseja mesmo apagar este hábito da sua lista?");
                    if (confirmar) {
                        DeleteHabit();
                    }
                }}
            />
        </ARTICLE>
    )
}

const ARTICLE = styled.article`
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-bottom: 10px;
    > p {
        font-family: 'Lexend Deca';
        font-size: 20px;
        margin-bottom: 8px;
        color: #666666;
    }
    > div {
        display: flex;
    }
    > img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    `
const Select = styled.p`
    font-family: 'Lexend Deca';
    margin-bottom: 0px;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: #DBDBDB;
    color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const NotSelect = styled.p`
    font-family: 'Lexend Deca';
    margin-bottom: 0px;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: #FFFFFF;
    color: #DBDBDB;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

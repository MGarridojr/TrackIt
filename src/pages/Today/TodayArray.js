import { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import check from "../../assets/check.svg"
import Context from "../../context/Context";


export default function TodayArray({ id, name, done, currentSequence, highestSequence }) {
    const { token, CatchHistory, CatchTodayHabit, CatchDaylyHabit } = useContext(Context);

    function toggleHabit() {
        if (done === false) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
                true, config)
                .then((response) => {
                    CatchHistory();
                    CatchTodayHabit();
                    CatchDaylyHabit();
                })
                .catch((err) => {
                    const { response } = err;
                    const { data } = response
                    const { message } = data;
                    alert(message);
                })
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                false, config)
                .then((response) => {
                    CatchDaylyHabit();
                    CatchTodayHabit();
                })
                .catch((err) => {
                    const { response } = err;
                    const { data } = response
                    const { message } = data;
                    alert(message);
                });
        }
    }

    return (
        done === false ?
            <HabitCard>
                <section>
                    <h2>{name}</h2>
                    <div>
                        <h3>Sequência atual: {currentSequence} dias</h3>
                        <h3>Seu recorde: {highestSequence} dias</h3>
                    </div>
                </section>
                <UnChecked onClick={toggleHabit}>
                    <img src={check} alt="check" />
                </UnChecked>
            </HabitCard>
            :
            <HabitCard>
                <section>
                    <h2>{name}</h2>
                    <div>
                        <h3>Sequência atual<Sequence>: {currentSequence} dias</Sequence></h3>
                        {currentSequence === highestSequence ? <h3>Seu recorde<Sequence>: {highestSequence} dias</Sequence></h3> : <h3>Seu recorde: {highestSequence} dias</h3>}
                    </div>
                </section>
                <Checked onClick={toggleHabit}>
                    <img src={check} alt="check" />
                </Checked>
            </HabitCard>
    )
}

const HabitCard = styled.article`
padding: 13px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
section {
    div {
        display: flex;
        flex-direction: column;
    }
    h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    h3 {
        display: inline-flex;
        font-size: 13px;
        margin-bottom: 3px;
    }
}
`

const UnChecked = styled.figure`
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
img {
    height: 28px;
}
`

const Checked = styled.figure`
width: 69px;
height: 69px;
background: #8FC549;
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
img {
    height: 28px;
}
`

const Sequence = styled.h3`
color: #8FC549;
`
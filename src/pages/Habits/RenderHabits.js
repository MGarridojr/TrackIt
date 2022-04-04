import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import "@fontsource/lexend-deca"
import Context from "../../context/Context";
import HabitsArray from "./HabitsArray";
import WeekArray from "./WeekArray";
export default function RenderHabits() {
    const { habitsArray, setHabitsArray, token, addHabit, setAddHabit, CatchHistory } = useContext(Context)
    const [newHabit, setNewHabit] = useState({ name: "", days: [] })
    const [loadingNewHabit, setLoadingNewHabit] = useState(false);
    const arraySemana = ["D", "S", "T", "Q", "Q", "S", "S"];    
    CatchHistory();

    function tirarElemento(array, item) {
        return array.filter(elemento => {
            return elemento !== item;
        });
    }

    function sendHabit(info) {
        info.preventDefault();
        setLoadingNewHabit(true)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, config)
            .then((response) => {
                const { data } = response;
                setHabitsArray([...habitsArray, data]);
                setNewHabit({ name: "", days: [] });
                setAddHabit(false);
                CatchHistory();
                setLoadingNewHabit(false);
            })
            .catch(()=>{
                console.log("erro")
                setLoadingNewHabit(false)
            });
            
    }
    function RenderWeekArray() {
        return arraySemana.map((dia, index) => {
            return (
                <WeekArray 
                    key={index}
                    index={index}
                    dia={dia}
                    newHabit={newHabit}
                    setNewHabit={setNewHabit}
                    tirarElemento={tirarElemento}
                    loadingNewHabit={loadingNewHabit}
                />
            )
        })
    }

    if (habitsArray.length > 0) {
        return (
            <>
                {addHabit ?
                    loadingNewHabit === false ?
                        <AddHabitSection onSubmit={sendHabit}>
                            <input
                                type="text"
                                value={newHabit.name}
                                onChange={(info) => setNewHabit({ ...newHabit, name: info.target.value })}
                                nome="nome do hábito"
                                id="nome do hábito"
                                placeholder="nome do hábito"
                            />
                            <menu>
                                <RenderWeekArray />
                            </menu>
                            <div>
                                <SendButton type="submit" onClick={() => setNewHabit({ ...newHabit, days: newHabit.days.sort() })}>Salvar</SendButton>
                                <CancelButton onClick={() => setAddHabit(false)}>Cancelar</CancelButton>
                            </div>
                        </AddHabitSection>
                        :
                        <AddHabitSection onSubmit={sendHabit}>
                            <input
                                type="text"
                                value={newHabit.name}
                                onChange={(info) => setNewHabit({ ...newHabit, name: info.target.value })}
                                nome="nome do hábito"
                                id="nome do hábito"
                                placeholder="nome do hábito"
                                disabled
                            />
                            <menu>
                                <RenderWeekArray />
                            </menu>
                            <div>
                                <SendButton type="submit" onClick={() => setNewHabit({ ...newHabit, days: newHabit.days.sort() })}>
                                    <ThreeDots color="#FFFFFF" height={20} width={20} />
                                </SendButton>
                                <CancelButton onClick={() => setAddHabit(false)}>Cancelar</CancelButton>
                            </div>
                        </AddHabitSection>
                    :
                    <></>}
                {habitsArray.map(habit => {
                    const { id, name, days } = habit;
                    return (
                        <HabitsArray
                            key={id}
                            id={id}
                            nome={name}
                            dias={days}
                        />
                    )
                })}
            </>
        )
    }
    else {
        return (
            <>
                {addHabit ?
                    loadingNewHabit === false ?
                        <AddHabitSection onSubmit={sendHabit}>
                            <input
                                type="text"
                                value={newHabit.name}
                                onChange={(info) => setNewHabit({ ...newHabit, name: info.target.value })}
                                nome="nome do hábito"
                                id="nome do hábito"
                                placeholder="nome do hábito"
                            />
                            <menu>
                                <RenderWeekArray />
                            </menu>
                            <div>
                            <SendButton type="submit" onClick={() => setNewHabit({ ...newHabit, days: newHabit.days.sort() })}>Salvar</SendButton>
                                <CancelButton onClick={() => setAddHabit(false)}>Cancelar</CancelButton>
                            </div>
                        </AddHabitSection>
                        :
                        <AddHabitSection onSubmit={sendHabit}>
                            <input
                                type="text"
                                value={newHabit.name}
                                onChange={(info) => setNewHabit({ ...newHabit, name: info.target.value })}
                                nome="nome do hábito"
                                id="nome do hábito"
                                placeholder="nome do hábito"
                                disabled
                            />
                            <menu>
                                <RenderWeekArray />
                            </menu>
                            <div>
                                <SendButton disabled type="submit" onClick={() => setNewHabit({ ...newHabit, days: newHabit.days.sort() })}>
                                    <ThreeDots color="#FFFFFF" height={20} width={20} />
                                </SendButton>
                                <CancelButton disabled onClick={() => setAddHabit(false)}>Cancelar</CancelButton>
                            </div>
                        </AddHabitSection>
                    :
                    <></>}
                <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>
            </>
        )
    }
}

const AddHabitSection = styled.form`
    width: 90%;
    height: 180px;
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 4px;

    > input {
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        background: #FFFFFF;
        color: #666666;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
    }

    > input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }

    > menu {
        display: flex;
        margin-bottom: 29px;
    }
    
    > div {
        display: flex;
        flex-direction: row-reverse;
    }
    `

const SendButton = styled.button`
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    margin-left: 4px;
    padding: 8px 17px;
    font-size: 16px;
    color: #FFFFFF;
`

const CancelButton = styled.button`
    height: 35px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    margin-left: 4px;
    padding: 8px 17px;
    font-size: 16px;
    color: #52B6FF;
`
const P = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: start;
    color: #666666;
    margin: 5px;
`
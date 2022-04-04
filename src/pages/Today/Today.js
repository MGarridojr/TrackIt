import styled from "styled-components";
import { useContext } from "react";
import "@fontsource/lexend-deca"
import dayjs from "dayjs";
import Context from "../../context/Context";
import TodayArray from "./TodayArray";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Today(){
    const { todayHabitArray, percentage, CatchTodayHabit } = useContext(Context);

    require("dayjs/locale/pt-br")
    dayjs.locale("pt-br");
    let diaMes = dayjs().format('DD/MM');
    let diaSemana = dayjs().format('dddd');
    let stringSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    function RenderTodayHabit() {
        if (todayHabitArray.length > 0) {
            return todayHabitArray.map(habito => {
                const { id, name, done, currentSequence, highestSequence } = habito;
                return (
                    <TodayArray
                        key={id}
                        id={id}
                        name={name}
                        done={done}
                        currentSequence={currentSequence}
                        highestSequence={highestSequence}
                    />
                )
            })
        }
    }

    return (
        <>
        <Header />
        <HojeExibido>
            <h1>{stringSemana}, {diaMes}</h1>
            {percentage.base === 0 ? <TextoCinza>Nenhum hábito concluído ainda</TextoCinza> : <TextoVerde>{((percentage.base/percentage.total) * 100).toFixed()}% dos hábitos concluídos</TextoVerde>}
            <RenderTodayHabit />
        </HojeExibido>
        <Footer />
        </>
    )
}
const HojeExibido = styled.main`
margin: 98px 15px 129px 15px;
h1 {
    margin-bottom: 3px;
    font-size: 23px;
    color: #126BA5;
}
`
const TextoCinza = styled.p`
color: #BABABA;
margin-bottom: 28px;
`

const TextoVerde = styled.p`
color: #8FC549;
margin-bottom: 28px;
`
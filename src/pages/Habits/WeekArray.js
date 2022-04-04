import styled from "styled-components";

export default function WeekArray(props) {
    const { dia, index, newHabit, setNewHabit, tirarElemento, loadingNewHabit } = props;

    if (newHabit.days.includes(index) === false) {
        return (
            loadingNewHabit === false ?
                <DiaDesselecionado onClick={() => {
                    setNewHabit({ ...newHabit, days: [...newHabit.days, index] });
                }
                }>{dia}</DiaDesselecionado>
                :
                <DiaDesselecionado disabled onClick={() => {
                    setNewHabit({ ...newHabit, days: [...newHabit.days, index] });
                }
                }>{dia}</DiaDesselecionado>
        )
    } else {
        return (
            loadingNewHabit === false ?
                <DiaSelecionado onClick={() => {
                    setNewHabit({ ...newHabit, days: tirarElemento(newHabit.days, index) });
                }
                }>{dia}</DiaSelecionado>
                :
                <DiaSelecionado disabled onClick={() => {
                    setNewHabit({ ...newHabit, days: tirarElemento(newHabit.days, index) });
                }
                }>{dia}</DiaSelecionado>
        )
    }
}

const DiaDesselecionado = styled.button`
font-size: 20px;
margin-bottom: 0px;
margin-right: 4px;
width: 30px;
height: 30px;
background: #FFFFFF;
color: #DBDBDB;
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const DiaSelecionado = styled.button`
font-size: 20px;
margin-bottom: 0px;
margin-right: 4px;
width: 30px;
height: 30px;
background: #DBDBDB;
color: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
import axios from "axios"
import { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from 'styled-reset'
import Context from "./context/Context"
import Habits from "./pages/Habits/Habits"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
    const [token, setToken] = useState(null)
    const [userImage, setUserImage] = useState("")
    const [habitsArray, setHabitsArray] = useState([])
    const [addHabit, setAddHabit] = useState(false)
    // const contextValue = { token, setToken, userImage, setUserImage }
    function CatchHistory() { //receberhistorico
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then((response) => {
            const { data } = response;
            setHabitsArray(data);
        })
        .catch((err) => {
            const { response } = err;
            const { data } = response;
            const { message } = data;
            alert(message);
        })
    }

    return (
        <>
            <Context.Provider value={{ 
                token, 
                setToken, 
                userImage, 
                setUserImage, 
                habitsArray, 
                setHabitsArray, 
                addHabit, 
                setAddHabit, 
                CatchHistory 
            }}>
                <BrowserRouter>
                    <Reset />
                    <Routes>
                        <Route path="/" element={<Login saveToken={(token) => setToken(token)} saveUserImage={(image) => setUserImage(image)} />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/habitos" element={<Habits />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector(".root"))
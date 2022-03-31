import { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App(){
    const [token, setToken] = useState(null)
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login saveToken={(token)=>setToken(token)} />}  />
        <Route path="/cadastro" element={<Register />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector(".root"))
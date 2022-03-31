import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/cadastro" element={<Register />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector(".root"))
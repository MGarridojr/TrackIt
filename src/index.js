import ReactDOM from "react-dom"
import Login from "./pages/Login/Login"
function App(){
    return(
        <>
        <Login />
        </>
    )
}
ReactDOM.render(<App />, document.querySelector(".root"))
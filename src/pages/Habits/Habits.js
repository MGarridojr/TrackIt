import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TitlePage from "../../components/TitlePage";
import RenderHabits from "./RenderHabits";
export default function Habits(){
    return(
        <Page>
        <Header />
        <TitlePage />
        <RenderHabits />
        <Footer />
        </Page>
    )
}
const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
`;
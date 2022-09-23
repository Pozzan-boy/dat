import NavMenu from "../../Components/Nav-menu/NavMenu";
import NavSearch from "../../Components/NavSearch/NavSearch";
import Header from "../../Components/Header/Header";
import AboutUs from "../../Components/AboutUs/AboutUs";
import NavButtons from "../../Components/NavButtons/NavButtons";
const Index = () => {
    return (
        <>
            <NavMenu />
            <Header>
                <NavSearch/>
                <NavButtons/>
            </Header>
            <AboutUs />
        </>
    )
}

export default Index;
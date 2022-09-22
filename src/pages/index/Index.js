import NavMenu from "../../Components/Nav-menu/NavMenu";
import NavSearch from "../../Components/NavSearch/NavSearch";
import Header from "../../Components/Header/Header";
import AboutUs from "../../Components/AboutUs/AboutUs";

const Index = () => {
    return (
        <>
            <NavMenu />
            <Header>
                <NavSearch/>
            </Header>
            <AboutUs />
        </>
    )
}

export default Index;
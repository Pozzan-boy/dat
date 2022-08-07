import NavMenu from "../../Components/Nav-menu/NavMenu";
import NavSearch from "../../Components/NavSearch/NavSearch";
import Header from "../../Components/Header/Header";

const Index = () => {
    return (
        <>
            <NavMenu />
            <Header>
                <NavSearch/>
            </Header>
        </>
    )
}

export default Index;
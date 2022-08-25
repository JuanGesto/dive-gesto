import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {

    const onAdd = () => {
        alert("Se agregó al carrito")
    }
    
    return (
        <>
            <Header/>
            <Main/>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    );
};

export default App;

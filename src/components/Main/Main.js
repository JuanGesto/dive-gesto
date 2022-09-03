import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

const Main = () => {
    const saludo = "Bienvenido"
    return (
        <>
            <main>
                <ItemListContainer saludo={saludo}/>
                <ItemDetailContainer/>
            </main>
        </>
    );
};

export default Main;

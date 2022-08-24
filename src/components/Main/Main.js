import ItemListContainer from "./ItemListContainer/ItemListContainer";

const Main = () => {
    const saludo = "Bienvenido"
    return (
        <>
            <main>
                <ItemListContainer saludo={saludo}/>
            </main>
        </>
    );
};

export default Main;

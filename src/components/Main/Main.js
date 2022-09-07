import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import {Routes, Route } from "react-router-dom"

const Main = () => {
    const saludo = "Bienvenido"
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer saludo={saludo}/>}/>
                    <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
                    <Route path="/detail/:itemID" element={<ItemDetailContainer/>}/>
                </Routes>
            </main>
        </>
    );
};

export default Main;

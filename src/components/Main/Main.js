import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import CartContext from "./Cart/CartContext";
import {Routes, Route } from "react-router-dom"

const Main = () => {
    const saludo = "Bienvenido"
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer saludo={saludo}/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<CartContext/>}/>
                </Routes>
            </main>
        </>
    );
};

export default Main;

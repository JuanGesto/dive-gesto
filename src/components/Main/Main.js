import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import {Routes, Route } from "react-router-dom"
import Checkout from "./Cart/Checkout";
import ScrollTop from "./ScrollTop";

const Main = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/detail/:id:colorId" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
                <ScrollTop/>
            </main>
        </>
    );
};

export default Main;

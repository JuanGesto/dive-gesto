import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import {Routes, Route, Navigate } from "react-router-dom"
import Checkout from "./Cart/Checkout";
import ScrollTop from "./ScrollTop";
import SearchBar from "./SearchBar";
import Support from "./Support";

const Main = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/search/:search" element={<ItemListContainer/>}/>
                    <Route path="/search/" element={ <Navigate to="/"/>}/>
                    <Route path="/detail/:id:colorId" element={<ItemDetailContainer/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
                <SearchBar/>
                <ScrollTop/>
            </main>
        </>
    );
};

export default Main;

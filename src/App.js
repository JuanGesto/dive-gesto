import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";


/*
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { products } from "./components/Main/ItemListContainer/products";

const ref = collection(db, "products");
products.map((prod) => addDoc(ref, prod));
*/


const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;

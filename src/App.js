import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";

const App = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </>
    );
};

export default App;

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";

const App = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <SearchProvider>
                        <Header />
                        <Main />
                    </SearchProvider>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </>
    );
};

export default App;

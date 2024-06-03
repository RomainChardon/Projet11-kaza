import {BrowserRouter, Route, Routes} from "react-router-dom";
import Acceuil from "./page/Acceuil.jsx";
import Apropos from "./page/Apropos.jsx";
import NotFound from "./page/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
    <BrowserRouter>
        <div className="main">
            <Header />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Acceuil />} />
                <Route path="/about" element={<Apropos />} />
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    )
}

export default App

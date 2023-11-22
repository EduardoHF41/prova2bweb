import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Home';
import Erro from './pages/Erro';
import Maisvendidos from './pages/Maisvendidos'
import Footer from './components/Footer';
import Header from './components/Header';
import Maisjogados from './pages/Maisjogados';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Sobre/>}/>
                <Route path="/Maisvendidos" element={<Maisvendidos/>}/>
                <Route path="/Maisjogados" element={<Maisjogados/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

export default RoutesApp;
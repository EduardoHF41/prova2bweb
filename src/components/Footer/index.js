import logo from './img/Logo.webp'
import './estilo.css';
function Footer(){
    return(
        <footer className="text-white pt-2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                <a href="#menuNavbar" className="nav-link px-2 textdecoration">
                    Sua Loja
                </a>
                </li>
                <li className="nav-item">
                <a href="#planetas" className="nav-link px-2 textdecoration">
                    Novidades
                </a>
                </li>
                <li className="nav-item ">
                <a href="#noticias" className="nav-link px-2 textdecoration">
                    Categoria
                </a>
                </li>
            </ul>
            <p className="text-center text-white">© 2023 The Mine, Inc</p>
        </footer>
    );
}

export default Footer;
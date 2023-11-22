import { Link } from "react-router-dom";
import logo from './img/Logo.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Header(){
    return(
        <header>
            <img src={logo} className="imgHeader"/>
    <div className="BGheader">
        <div className="butonsHeader">
            <div className="algo">
                <Dropdown as={ButtonGroup}>
                <Button variant="dark"><Link to="/" className="link butom">Sua Loja</Link></Button>

                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Página inicial</Dropdown.Item>
                    <Dropdown.Item href="/">Novidades</Dropdown.Item>
                    <Dropdown.Item href="">Recomendações</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <Dropdown as={ButtonGroup}>
                <Button variant="dark"><Link to="/" className="link"><Link to="/" className="link">Novidades</Link></Link></Button>

                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="/Maisvendidos">Mais vendidos</Dropdown.Item>
                    <Dropdown.Item href="/Maisjogados">Mais jogados</Dropdown.Item>
                    <Dropdown.Item href="/">Lançamentos</Dropdown.Item>
                    <Dropdown.Item href="/">Em breve</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <Button variant="dark"><Link to="/" className="link">Categoria</Link></Button>
            </div>
        </div>
        <div>
                <input type="text" className="barraDePesquisa" placeholder="🔎Search.."/>
        </div>
    </div>    
        </header>
        
    );
}

export default Header;
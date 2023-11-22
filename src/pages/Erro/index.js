import { Link } from "react-router-dom";
import './style.css'
function Erro(){
    return(
        <div className="content">
            <h2>Ops! Parece que essa página não existe!</h2>
            <span>Encontramos essas páginas aqui:</span>
            <br/>

            <Link to="/" className="links">Home</Link>
            <br/>
            <Link to="/sobre" className="links">Sobre</Link>

            <br/>
            <Link to="/contato" className="links">Contato</Link>   
            <hr/>
            
            <Link to="/produto" className="links">Acessar Produto</Link>
        </div>
    );
}

export default Erro;
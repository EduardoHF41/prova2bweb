import { Link } from "react-router-dom";
import './style.css'
import cs from './img/csgo-logo-CAA0A4D48A-seeklogo.com.png';
import mk1 from './img/MK1.png'
import baldurs from './img/baldursgato.jpeg'
import cod from './img/warzone.jpeg'
import fifa from './img/ea-fc-pc.jpg'
import './style.css'
function Maisjogados(){
    return(
        <div className="content">
                
        <div className="borda">
            <h1>Jogos mais jogados da semana</h1>
        </div>
        <div className="borda">
            <img src={cs}/>
            <span>CSGO 2</span>
        </div>
        <div className="borda">
            <img src={fifa}/>
            <span>EA Sports FC 2024</span>
        </div>
        <div className="borda">
            <img src={mk1}/>
            <span>Mortal Kombat 1</span>
        </div>
        <div className="borda">
            <img src={baldurs}/>
            <span>Baldur's Gate</span>
        </div>
        <div className="borda">
            <img src={cod} />
            <span>Call of Duty Warzone 2.0</span>
        </div>
    </div>

    );
}

export default Maisjogados;

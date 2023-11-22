import { Link } from "react-router-dom";
import baldurs from './img/baldursgato.jpeg'
import gta from './img/logo_jogo_01.png'
import fifa from './img/ea-fc-pc.jpg'
import witcher from './img/the witcher.jpeg'
import mentiras from './img/channels4_profile.jpg'
import './style.css'
function Maisvendidos(){
    return(
            <div className="content">
                
                <div className="borda">
                    <h1>Jogos mais vendidos da semana</h1>
                </div>
                <div className="borda">
                    <img src={witcher}/>
                    <span>The Witcher</span>
                </div>
                <div className="borda">
                    <img src={fifa}/>
                    <span>EA Sports FC 2024</span>
                </div>
                <div className="borda">
                    <img src={mentiras}/>
                    <span>Lies of P</span>
                </div>
                <div className="borda">
                    <img src={baldurs}/>
                    <span>Baldur's Gate</span>
                </div>
                <div className="borda">
                    <img src={gta} />
                    <span>Grand theft auto V</span>
                </div>
            </div>
   
   
   
   
   
   );
}

export default Maisvendidos;
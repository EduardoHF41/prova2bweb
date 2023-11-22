import { Link } from "react-router-dom";
import './style.css'
import Banner from './img/Banner.jpg'
import Jogodestaque from './img/Destaque.jpg'
import jogo1 from './img/Jogo 1.jpg'
import jogo2 from './img/Jogo 2.jpg'
import jogo3 from './img/Jogo 3.jpg'
function Home(){
    return(
        <body className="BGcolor">
        <div style={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center',               
                display: 'flex',
              marginBottom:'50px',
            }}>

             <div>
                <img src={Banner} />
            </div>

            

        </div>
       
        <div style={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center',               
                }}>
            <div className="flex-container " >
                <div>
                <h1 style={{paddingTop:'3%', marginRight:'5px', width:'100%', textAlign:'left'}}>Mortal Kombat 1</h1>
                <p style={{margin:'10px'}}>Descubra um Universo renascido de Mortal Kombat<br/> criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1<br/> inaugura uma nova era da franquia icônica com um novo <br/> sistema de luta, modos de jogo e fatalities!</p>
                </div>
                
                <div style={{width:'50%'}}>
                    <img src={Jogodestaque}/>
                    
                </div>
            </div>
        
        </div>
        <div style={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center',               
                }}>
           <div style={{marginBottom:'5%'}} className="flex-containerOferta">
                <div style={{width:'100%'}}>
                    <h1>Ofertas Especiais</h1>
                </div>
                <div>
                    <div className="JogosOfertas">
                        <img src={jogo1}/>
                        <p style={{order:'4'}}>The Witcher 3 </p>
                        <img src={jogo2} className="NFSoferta"/>
                        <p style={{order:'5'}}>Nead for Speed Unbound</p>
                        <img src={jogo3}/>
                        <p style={{order:'6'}}>Call of Duty</p>
                    </div>
                </div>
            </div> 
        
        
        </div>
        
        </body>
       
    );
}

export default Home;
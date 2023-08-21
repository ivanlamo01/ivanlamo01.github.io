import twitter from "../Assets/img/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
import ig from "../Assets/img/Instagram_icon.png.webp"
import wsp from "../Assets/img/whatsapp.svg"
import gmail from "../Assets/img/Gmail_icon_(2020).svg.webp"
import fb from "../Assets/img/facebook-circle.svg"
import ubi from "../Assets/img/3721984-removebg-preview.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className="container-footer-all">
                    <div className="topf">
                        <a href="https://www.instagram.com/lmm.estetica/"  target={"_blank"}><img src={ig} alt="instagram"/></a>
                        <a href="https://www.instagram.com/lmm.estetica/"  target={"_blank"}><img src={wsp} alt="whatsapp"/></a>
                        <a href="https://www.instagram.com/lmm.estetica/"  target={"_blank"}> <img src={gmail} alt="gmail"/></a>
                        <a href="https://www.instagram.com/lmm.estetica/"  target={"_blank"}><img src={fb} alt="facebook"/></a>
                        
                    </div>
                    <div className="container-body">
                        <div className="colum1">
                            <h1>Mas informacion de la compañia</h1>
                                <p> Esta compañia se dedica a la venta y distribucion
                                    de camisetas originales importadas, este 
                                texto es solo para llenara informacion en el cuadro de informacion 
                                de la compañia.</p>
                            </div>
                            <div className="colum2">
                                <h1>Redes Sociales</h1>
                                <div className="row" >
                                    <img src={twitter} alt="twitter"/>
                                    <a href=" https://twitter.com/Ivan_lamo01" target={"_blank"}>
                                    <label  >Siguenos en Twitter</label>
                                    </a>
                                </div>
                                <div className="row" >
                                    <img src={ig} alt="instagram"/>
                                    <a href=" https://www.instagram.com/ivan_lamonega/?hl=es-la" target={"_blank"}>
                                    <label  >Siguenos en Instagram</label>
                                    </a>
                                </div>
                            </div>
                            <div className="colum3">
                                <h1>Informacion Contactos</h1>
                                <div className="row2">
                                    <img src={ubi} alt="ubicacion"/>
                                    <label>La Plata, 
                                    Argentina                                    
                                    Calle 126 y 43
                                    Casa # 493</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-footer">
                        <div className="footer">
                                <div className="copyright">
                                    © 2023 Todos los Derechos Reservados | <a href="#">IvanLamo</a>
                                </div>
                                <div className="information">
                                    <a href="#">Informacion Compañia</a> | <a href="#">Privacion y Politica</a> | <a href="#">Terminos y Condiciones</a>
                                </div>
                            </div>
                        </div>
    </footer>
        </>
    );}
export default Footer;

//Uso href en los links del footer ya que me van a dirigir a otra pestaña y no se recargara la pagina


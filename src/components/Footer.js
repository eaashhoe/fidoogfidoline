import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Greenlogo from "../images/gensprout-logo-gron.svg";

//variabel som importerer nogle ikoner fra https://mui.com/material-ui/material-icons/
//og et billede og definerer fra vores mappe 
//Footer-komponent opretter en HTML footer med tre sektioner.

export default function Footer() {
    return (
        <footer>
            <div className="footersektion">
                <div className="footeroverskrift">
                    <h3>Kontakt</h3>
                </div>
                <div className="footerkontakt">
                    <a href='tel:40435954'> +45 40435954</a>
                    <a href='mailto:'>kontakt@gensprout.dk</a>
                    <a href='https://goo.gl/maps/1kDwqx8HYSMrLjQRA' target="_blank">Gensproutvej 14, 8000 Aarhus C</a>
                </div>
            </div>

            <div className="footersektion">
                <div className="footeroverskrift">
                    <h3>SoMe</h3>
                </div>
                <div className='someicons'>
                    <a href='*' target="_blank"><FacebookSharpIcon /></a>
                    <a href='*' target="_blank"><InstagramIcon /></a>
                    <a href='*' target="_blank"><LinkedInIcon /></a>
                </div>
            </div>
            <div className="footersektion">
                <a href="/"><img src={Greenlogo} alt="Gensprout logo" className="footerlogo" ></img></a>
            </div>
        </footer>
    )
}

// I SoMe-sektionen vises tre ikoner, som er links til virksomhedens Facebook-, 
//Instagram- og LinkedIn-sider. Alt indholdet i footer-komponenten 
//er defineret som JSX-elementer.
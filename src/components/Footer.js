import CallSharpIcon from '@mui/icons-material/CallSharp';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

export default function Footer() {
    return (
        <footer>
            <div className="footersektion">
                <div className="footeroverskrift">
                    <CallSharpIcon />
                    <h3>Kontakt</h3>
                </div>
                <div className="footerkontakt">
                    <a href='tel:40435954'>40435954</a>
                    <a href='mailto:'>fidoogfidoline@gmail.com</a>
                    <address>opfindervej 14, 8000 Aarhus C</address>
                </div>
            </div>

            <div className="footersektion">
                <div className="footeroverskrift">
                    <AccessTimeFilledSharpIcon />
                    <h3>Åbningstider</h3>
                </div>
                <div >
                    <p>Mandag: Lukket</p>
                    <p>Tirsdag-Fredag: 12-20</p>
                    <p>Lørdag-Søndag: 12-16</p>

                </div>
            </div>
            <div className="footersektion">
                <h3>SoMe</h3>
                <div>
                    <a href='facebook.com'><FacebookSharpIcon /></a>

                </div>
            </div>
        </footer>
    )
}
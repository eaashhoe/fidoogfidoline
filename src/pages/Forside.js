import klistermearker from "../images/klistermearker.svg";
import webdesignklistermearke from "../images/webdesign.svg";
import webudviklingklistermearke from "../images/webudvikling.svg";
import jordenklistermearke from "../images/jordenifokusklister.svg";
import pdfbillede from "../images/checkliste.svg";
import MyForm from "../components/Form";
import Paerer from "../images/paerer.svg";
import Sofiebillede from "../images/os/sofie_portrat.png";
import Signebillede from "../images/os/signe_portraet.png";
import Sarahbillede from "../images/os/sarah_portraet.png";
import Anebillede from "../images/os/ane_portraet.png";
import { NavLink } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";

export default function Forside() {
    return (
        <main>
            <section className="herosection">
                <div className="heroopdeling">
                    <h1>Vi tager <span className="herosectionspan">webdesign</span> <br></br> til det næste niveau</h1>
                    <p>Bliv en del af vores mission for at gøre nettet grønnere!
                        Gennem webdesign og udvikling arbejder vi på at reducere
                        CO2-udledning og skabe en lysere og mere bæredygtig fremtid.</p>
                </div>

                <div className="heroopdeling">
                    <img src={klistermearker} alt="Gensprout klistermærker" className="klistermearker" ></img>
                </div>
            </section>

            <section className="vitilbyderforside">
                <div className="vitilbydertekst">
                    <h2>
                        Hvad tilbyder vi?
                    </h2>
                    <p>
                        Hos os får du transparent hjælp og vejledning til at gøre din hjemmeside mere CO2 neutral, uden
                        at gå på kompromis med kvaliteten, brugeroplevelsen eller designet. Vi kan sammen bidrage til at
                        sætte en vis standard for mere CO2 neuralt webdesign i fremtiden og passe på miljøet.
                    </p>
                </div>
                <div className="klistermearkeoversigt">
                    <div className="klistermearkediv">
                        <img src={webdesignklistermearke} alt="Gensprout klistermærker" className="individuelklister" ></img>
                        <h3>Webdesign</h3>
                        <p>Vi kortlægger og skaber
                            overblik over hvordan du
                            får sammenhæng mellem
                            din virksomheds kerneværdier
                            og mere bæredygtige tiltag.</p>
                        <NavLink to="/vitilbyder" className="greenbutton">Læs mere</NavLink>
                    </div>
                    <div className="klistermearkediv">
                        <img src={jordenklistermearke} alt="Gensprout klistermærker" className="individuelklister" ></img>
                        <h3>Jorden i fokus</h3>
                        <p>Verden står over for store
                            miljømæssige udfordringer. Hos
                            os tror vi på, at en del af løsningen
                            ligger i at ændre vores vaner,
                            forbrug og handlinger.
                        </p>
                        <NavLink to="/vitilbyder" className="greenbutton">Læs mere</NavLink>
                    </div>
                    <div className="klistermearkediv">
                        <img src={webudviklingklistermearke} alt="Gensprout klistermærker" className="individuelklister" ></img>
                        <h3>Webudvikling</h3>
                        <p>Vi udvikler  og sikrer dig en
                            Professionel hjemmeside med
                            fuld fokus På kvalitet. Så du ikke
                            skal gå på kompromis
                            med dit design. </p>
                        <NavLink to="/vitilbyder" className="greenbutton">Læs mere</NavLink>
                    </div>
                </div>
            </section>

            <section className="impactforside">
                <div className="custom-shape-divider-top-1681302304">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="impactforsidetekst">
                    <h2>Vores Impact
                    </h2>
                    <p className="whitetext">Vi er et professionelt og ambitiøs team, som består af Ane der
                        er uddannet markedsføringsøkonom og Sofie, Signe og Sarah
                        som er uddannet multimediedesignere fra Aarhus Business Academy.
                        Vi har sammenlagt 5 års erfaring med webdesign og webudvikling.</p>
                    <NavLink to="/voresimpact" className="pinkbutton">Læs mere</NavLink>
                </div>

                <div className="impactforsidebillede">
                    <img src={Paerer} alt="Gensprout idepærer" className="paerer" ></img>
                </div>


            </section>

            <section className="hvemervi-forside">
                <div className="hvemervi-forside-cards">
                    <div className="hvemervi-forside-pic">
                        <img src={Sofiebillede} alt="Sofies portræt" className="porttraetter-forside"></img>
                        <h3 className="whitetext">Sofie</h3>
                    </div>
                    <div className="hvemervi-forside-pic">
                        <img src={Signebillede} alt="Sofies portræt" className="porttraetter-forside"></img>
                        <h3 className="whitetext">Signe</h3>
                    </div>
                    <div className="hvemervi-forside-pic">
                        <img src={Sarahbillede} alt="Sofies portræt" className="porttraetter-forside"></img>
                        <h3 className="whitetext">Sarah</h3>
                    </div>
                    <div className="hvemervi-forside-pic">
                        <img src={Anebillede} alt="Sofies portræt" className="porttraetter-forside"></img>
                        <h3 className="whitetext">Ane</h3>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1681302127">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section className="pdfforside">
                <div className="pdfforsidebillede">
                    <img src={pdfbillede} alt="Gensprout pdfbillede" className="pdfbillede" ></img>
                </div>
                <div className="pdfforsidetekst">
                    <h2>Implementer en
                        mere bæredygtig tilgang,
                        i din hverdag.
                    </h2>
                    <p>Vi har udarbejdet en PDF-guide med praktiske råd og eksempler til at reducere CO2-aftrykket ved at optimere webdesign-processen.

                        Guiden inkluderer information om valg af hosting-udbyder, optimering af billeder, farve- og skrifttypevalg samt tips til at reducere ressourceforbrug og skabe en mere effektiv brugeroplevelse.

                        Download vores guide i dag og implementer en mere bæredygtig tilgang til din hverdag!</p>
                    <NavLink to="/error" className="greenbutton">Download</NavLink>
                </div>

            </section>

            <section className="impactforside">
                <div className="custom-shape-divider-top-1681302304">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="impactforsidetekst">
                    <h2>Kom i kontakt med os
                    </h2>
                    <p className="whitetext">Er du interesseret i at samarbejde med os eller høre mere om, hvad vi kan gøre for dig.
                        Så er du velkommen til at udfylde formularen og så kontakter vi dig indenfor 24 timer.</p>
                </div>
                <div className="formfield">
                    <MyForm />
                </div>
                <div className="custom-shape-divider-bottom-1681302127">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>


        </main >
    )

}

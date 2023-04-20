import pc from "../images/pc.svg";
import Gensproutpigerne from "../images/gensproutpigerne.svg"
import Co2 from "../images/co2.svg";
import { NavLink } from "react-router-dom";


export default function Voresimpact() {
    return (
        <main>
            <section className="voresimpactheader">
                <div className="heroopdeling">
                    <h1>Vores <span className="herosectionspan">impact</span></h1>
                </div>
            </section>
            <section className="voresimpactsection">
                <div className="custom-shape-divider-top-1681302304">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className="voresimpact_førstesection">

                    <img src={pc} alt="Gensprout pc" className="individuelklister"></img>


                    <h2 className="whitetext voresimpact_førstesection_tekst">Vi gør en dedikeret indsats for at vejlede vores kunder
                        mod en mere bæredygtig omstilling online.
                        Vores engagement i at gøre en positiv forskel for miljøet og
                        ommende generationer er en central drivkraft for os.</h2>
                </div>


                <div className="custom-shape-divider-bottom-1681302127">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section className="voresimpact_andensection">
                <div className="voresimpact_andensektion_tekst">
                    <h2>
                        En generation med <br></br> jorden i fokus
                    </h2>

                    <p>GenSprout består af fire unge kvinder i midt 20'erne fra Aarhus, som har
                        en fælles mission om at gøre en forskel for de kommende generationer
                        og miljøet. Det er også ud fra denne tankegang at idéen til GenSprout
                        opstod i 2020 - et navn som iøvrigt står for "en spirende generation".
                    </p>

                </div>

                <div>
                    <img src={Gensproutpigerne} alt="Gensprout Pigerne" className="faellesbillede"></img>

                </div>

            </section>
            <section className="voresimpact_tredjesection">
                <div className="custom-shape-divider-top-1681302304">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>


                <div className="voresimpact_tredjesectiontekst_co2">
                    <h2 className="voresimpact_tredjesectiontekst_co2_overskrift">Vores værdier
                    </h2>
                    <p className="whitetext">Det som kendetegner os som virksomhed er vores mål om at påvirke
                        webdesign i en CO2 neutral retning. Det gør vi ved selv at leve op til en
                        vis standard samt vejlede og støtte vores kunder i mere bæredygtige
                        tiltag når det kommer til webdesign og hjemmesideløsninger.</p>
                    <NavLink to="/error" className="pinkbutton">Læs mere</NavLink>
                </div>

                <div className="voresimpact_tredjesection_co2">
                    <img src={Co2} alt="Gensprout co2"></img>
                </div>

                <div className="custom-shape-divider-bottom-1681302127">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </main>
    )
}
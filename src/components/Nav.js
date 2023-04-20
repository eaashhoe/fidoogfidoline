// javascript variabel
import { NavLink } from "react-router-dom";
import logo from "../images/gensprout-logo-beige.svg";

//Importerer to komponenter fra biblioteket, NavLink fra react router 
//importeret logo fra vores mappe

export default function Nav() {

    // her definerer vi header elementet, 
    //indeholder: img element, der viser logoet for Gensprout. 
    //nav elementet: tre NavLink elementer, som er vores navigationsbar
    //links til vores undersider- "Vi tilbyder", "Vores impact" og "Kontakt os". 

    return (
        <header className="globalheader">
            <a href="/"><img src={logo} alt="Gensprout logo" className="logo" ></img></a>
            <nav>
                <NavLink to="/vitilbyder" className="navlink">Vi tilbyder</NavLink>
                <NavLink to="/voresimpact" className="navlink">Vores impact</NavLink>
                <NavLink to="/kontaktos" className="navlink">Kontakt os</NavLink>
            </nav>
        </header>
    )
}

//Når en NavLink element klikkes, ændres URL'en i browseren 
//og den korrekte komponent vises på siden. 
//resten bliver lavet i app.js
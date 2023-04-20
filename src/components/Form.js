import { useState } from 'react';
// import ReactDOM from 'react-router-dom';


//Denne kode importerer useState-funktionen fra React og eksporterer 
//en funktion kaldet MyForm. MyForm er en React-komponent, 
//som returnerer en HTML-formular med fire inputfelter
//(firstName, lastName, phone og message) og en submit-knap.

export default function MyForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    //vi har lavet 4 variabler, konstanter med fire useState-hooks 
    //tomme strenge som startværdi- fordi når en bruger taster værdier i 
    //inputfelterne, vil hooks'ene blive opdateret med den aktuelle værdi.

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Tak fordi du kontaktede os ${firstName}, du vil modtage en beskræftelsesmeddelelse på mail inde for 15 min.`)
    }

    //Når send knappen bliver klikket på, kalder handleSubmit-funktionen, 
    //som viser en alert-besked med en bekræftelsesmeddelelse, der indeholder 
    //fornavnet på den person, der udfyldte formularen.

    return (
        <form onSubmit={handleSubmit}>

            <label>Fornavn
                <input
                    type="text"
                    value={firstName}
                    placeholder="Skriv dit fornavn her"
                    //hvis der bliver skrevet i feltet, så vil værdien setFirstName blive opdateret
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </label>

            <label>Efternavn<span className="notrequired">ikke påkrævet</span>
                <input
                    type="text"
                    value={lastName}
                    placeholder="Skriv dit efternavn her"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>

            <label>Telefonnummer
                <input
                    type="tel"
                    value={phone}
                    placeholder="Skriv dit telefonnummer her"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </label>

            <label>Besked
                <textarea
                    value={message}
                    placeholder="Hvad har du lyst til at vi skal tale om?"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>

            <input type="submit" className='pinkbutton' />
        </form>
    )
}

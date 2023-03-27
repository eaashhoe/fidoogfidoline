import { useEffect, useState } from "react";
//opdateringssiden bruger denne kompontent. 
//postform har 2 funktioner, opret nyt produkt og ændring af produkt. 
//opretter variabler, som er lig med produktattributter, som der kan ændres
//eks. variable = produktnavn.
//"" = tom tekst 
//0 = pris og varigheds udgangspunkt.
export default function PostForm({ savePost, post }) {
    const [produktnavn, setProduktnavn] = useState("");
    const [beskrivelse, setBeskrivelse] = useState("");
    const [pris, setPris] = useState(0);
    const [varighed, setVarighed] = useState(0);
    //der må ikke være et produkt som mangler noget, ellers kommer denne
    const [errorMessage, setErrorMessage] = useState("");


    //hvis der er tale om opdatering (post er ikke tom), så sæt variable lig med eksiterende oplysninger 
    //ved opret sker der ingenting, variabler beholder tomme værdier fra ovenfor 
    useEffect(() => {
        if (post) {
            setBeskrivelse(post.beskrivelse);
            setProduktnavn(post.produktnavn);
            setPris(post.pris);
            setVarighed(post.varighed);
        }
    }, [post]);

    //funktion som håndtere "gem produkt" --> formular submittes(sendes)

    async function handleSubmit(e) {
        e.preventDefault();
        //altså bliver der lavet et objekt "formData" med de oplysninger som er intastet i formularen.
        const formData = {
            beskrivelse: beskrivelse,
            produktnavn: produktnavn,
            pris: parseFloat(pris),
            varighed: parseInt(varighed)
        }

        //tjekker om alle felter er udfyldt 
        //hvis ikke, udskriv error messege nedenfor
        const validForm = formData.beskrivelse && formData.produktnavn && formData.pris &&
            formData.varighed;
        if (validForm) {
            savePost(formData);
        } else {
            setErrorMessage("Udfyld venligst alle felter.");
        }
    }
    //onSubmit = event listener 
    // tjekker om man skriver noget ind, hvis der er noget i forvejen skrives en tekst.
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Produktnavn<input type="text" name="produktnavn" value={produktnavn}
                    //registrerer hver gang brugeren trykker på en tast, og opdatere. 
                    placeholder="Indtast produktnavn" onChange={e => setProduktnavn(e.target.value)} />
            </label>
            <label>
                Beskrivelse<input type="text" name="beskrivelse" value={beskrivelse} placeholder="Indtast
        produktbeskrivelse" onChange={e => setBeskrivelse(e.target.value)} />
            </label>
            <label>
                Pris<input type="text" name="pris" value={pris} placeholder="Indtast pris" onChange={e =>
                    setPris(e.target.value)} />
            </label>
            <label>
                Varighed<input type="text" name="varighed" value={varighed} placeholder="Indtast
        varighed" onChange={e => setVarighed(e.target.value)} />
            </label>
            <p className="tekst-fejl">{errorMessage}</p>
            <button type="submit">Gem produkt</button>
        </form>
    );
}
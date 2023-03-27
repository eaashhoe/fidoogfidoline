import { useNavigate } from "react-router-dom";

//laver kort
//registrerer hvis den ansatte klikker på et kort, så man kan opdatere kortet
export default function ProduktAdminkort({ post }) {
    const navigate = useNavigate();

    //når bruger klikker på produktkort
    //dirigeres bruger til formularside. 
    //post.id er kortets unikke placering i produktlisten. 
    function opdaterKlik() {
        navigate(`posts/${post.id}`);
    }
    //så præsenteres informationerne der klikkes på 
    return (
        <div className="kort adminkort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr />
                <p> Varighed: {post.varighed}</p>
                <p> Pris kr. {post.pris}</p>
            </div>
        </div>
    )
}

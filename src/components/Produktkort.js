import { Link } from "react-router-dom"
//post=oplysning - vi skal hente oplysninger fra vores firebase 
// f.eks post.pris er lig med priselementet på firebase som vi skal hente
export default function Produktkort({ post }) {
    return (
        <div className="kort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr />
                <p> Varighed: {post.varighed}</p>
                <p> Pris kr. {post.pris}</p>

                <button className="laesmereknap">Læs mere</button>
                <Link to={`/bestil/${post.id}`} className="bestilknap">Bestil</Link>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
//post=oplysning - vi skal hente oplysninger fra vores firebase 
// f.eks post.pris er lig med priselementet på firebase som vi skal hente
export default function Bestillingskort({ post }) {
    return (
        <div className="kort">
            <div className="tekst">
                <h3>{post.produkt}</h3>
                <hr />
                <p>{post.tid}</p>
                <p>{post.dato}</p>
                <hr />
                <p> Hundenavn: {post.hundenavn}</p>
                <p> Hunderace: {post.hunderace}</p>
                <p> Ejer {post.navn}</p>
                <p> Mobil: {post.mobil}</p>
                <p> E-mail: {post.email}</p>
                <p> Adresse: {post.adresse}</p>
                <p> postnummer: {post.postnr}</p>
                <p> By: {post.bynavn}</p>

            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import forsidebillede from "../images/forsidecoverbillede.jpg";
import Produktkort from "../components/Produktkort";

export default function Forside() {
    // post kommer til at indeholde listen af hundeplejeservices
    // isPosts kan være enten true (hvis der er produkter) eller
    // false hvis ingen produkter er der 
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);


    //data hentes fra firebase og gemmes i "post" variabel
    useEffect(() => {
        async function getPosts() {
            const url =
                "https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
            //vent indtil response modtager posititvt svar fra firebase
            const response = await fetch(url);
            // læg jason data (listen af produkter) over i variablen "dat"
            const data = await response.json();

            //tjek om der faktisk er produkter på listen (positiv hvis
            //forskellig fra null
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPosts(postsArray);
            } else {
                setIsPosts(false);
            }
        }
        getPosts();
    }, []);

    return (
        <main>
            <section className="forsidebillede">
                <img src={forsidebillede} alt="Billede af huoadg5888 fra Pixabay" className="herobillede"></img>
                <h1 className="forsideoverskrift">Fido & Fidoline</h1>
            </section>

            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                        <Produktkort key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingen produkter at vise</p>
            )}
        </main >
    )

}
//kommentar til linje 44 til 52, hvis der er produkter at vise
//(isPosts = true), så går programmet i en løkke(loop)
// (post.map) - for hvert element (post) på listen (posts), vis produktkort for produktet. 

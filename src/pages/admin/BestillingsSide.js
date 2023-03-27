import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bestillingskort from "../../components/admin/Bestillingskort";

export default function BestillingsSide() {
    // posts kommer til at indeholde alle produkter i en liste (array)
    const [posts, setPosts] = useState([]);
    //isPosts kan være true eller false. hvis ingen produkter eksistere, så er isPosts false
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
    const navigate = useNavigate();

    //hook - funktion som henter produkter fra firebase database
    useEffect(() => {
        async function getPosts() {
            const url =
                "https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
            const response = await fetch(url);
            // data indeholder al indhold fra produkt database
            //responce tjekker om der er adgang til url'en ovenover. 
            const data = await response.json();
            //null tjek, er der produkter - hvis data er noget andet end 0, så er der der data.
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                //variablen posts bliver lig med listen af produkter 
                setPosts(postsArray);
            } else {
                //sætter variablen isPosts til false, for der er ingen produkter
                setIsPosts(false);
            }
        }
        getPosts();
    }, []);


    // function oversigtklik() {
    //     navigate("/bestillingsside");
    // }

    return (
        <main>
            <h1>
                Bestillingsoversigt
            </h1>
            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                        //jeg overfor informatoner fra det enkelte produkt til produktkort
                        <Bestillingskort key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingenting at vise</p>
            )}
        </main>
    );

}
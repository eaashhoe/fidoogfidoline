import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produktkort from "../../components/admin/ProduktAdminkort";

export default function AdminSide() {
    // posts kommer til at indeholde alle produkter i en liste (array)
    const [posts, setPosts] = useState([]);
    //isPosts kan være true eller false. hvis ingen produkter eksistere, så er isPosts false
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
    const navigate = useNavigate();

    //hook - funktion som henter produkter fra firebase database
    useEffect(() => {
        async function getPosts() {
            const url =
                "https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
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
    //event handler for klik på opret knap 

    function opretklik() {
        navigate("/create");
    }
    // function oversigtklik() {
    //     navigate("/bestillingsoversigt");
    // }

    //selve kompontent 
    //hvis isPost ({isPosts ? )er true, så vis produktkort. 
    //hvis isPost er false, så fortæl at der er ingenting at vise. 
    return (
        <main>
            <h1>
                Administration af produkter
                <button type="button" onClick={opretklik}>+ Opret produkt</button>
            </h1>
            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                        //jeg overfor informatoner fra det enkelte produkt til produktkort
                        <Produktkort key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingenting at vise</p>
            )}
        </main>
    );

}
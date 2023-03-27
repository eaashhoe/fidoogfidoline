import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../../components/admin/PostForm";

export default function OpdateringsSide() {

    const navigate = useNavigate();
    //post er et opjekt og indeholder kun oplysninger om det ene produkt
    const [post, setPost] = useState({});

    const params = useParams();

    //firebase url, med produkter + params.postId (= det produkt-index som brugere klikkede på for at opdatere det
    //- får afvide at produktkort, at der bliver klikket på et uniktkort, informationen fra det kort bliver sendt videre til opdateringssiden. 
    //så det opdateringssiden gør, er at sende de informationer til brugeren, og kun de info som de skal bruge. 
    const url = `https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter/${params.postId}.json`;

    //finder data om det produkt som brugeren klikkede på. 
    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const data = await response.json();
            //post variablen indeholder oplysninger om det valgte produkt
            setPost(data);
        }
        getPost();
    }, [url]);
    //funktion gemmer ændrede oplysninger
    async function savePost(postToUpdate) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(postToUpdate)
        });
        const data = await response.json();
        console.log(data);
        //efter genm produkt sendes brugeren til /admin - admin siden
        navigate("/admin");
    }
    //funktion sletter produkt
    async function deletePost() {
        //vil du bekræfte at du gerne vil slette vindue popper op 
        const bekraeftSletning = window.confirm(`Vil du slette produktet "${post.produktnavn}"?`)

        //klikker brugeren ok til bekræft sletning, køres dette, og produktet slettes
        if (bekraeftSletning) {
            const url = "https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
            const firstResponse = await fetch(url);
            const firstData = await firstResponse.json();

            firstData.splice(params.postId, 1); // Delete element from array

            const response = await fetch(url, {
                method: "PUT", // Overwrites database
                body: JSON.stringify(firstData) // Rewrite database
            });

            const data = await response.json();
            console.log(data);
            //efter sletning, navigeres brugeren til /admin - admin siden
            navigate("/admin");
        }

    }
    //postform: præsentere oplysninger for brugeren, så brugeren kan redigere i det 
    //hvor man kan opdatere eller slette produkt 
    //dette kommer fysisk på siden! 
    //savePost, fortæller ovenover hvad der skal ske når brugeren trykker gem, så skal kompontent gå til denne her savePost 
    //deletePost, foræller at hvis man klikker på slet, så skal den udfører den funktion ovenover og sletter posten. 
    return (
        <section className="page">
            <h1>Opdatér produkt</h1>
            <PostForm post={post} savePost={savePost} />
            <button className="btn-delete" onClick={deletePost}>
                Slet produkt
            </button>
        </section>
    );

}
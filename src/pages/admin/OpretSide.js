import { useNavigate } from "react-router-dom";
import PostForm from '../../components/admin/PostForm';
// henter postForm kan virke til oprettelse og opdatering

export default function OpretSide() {
    const navigate = useNavigate();

    async function createPost(newPost) {

        const url = "https://fidoogfidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
        const firstResponse = await fetch(url);
        let firstData = await firstResponse.json();


        if (firstData === null) { //hvis data er lig med nul = ingen produkter
            firstData = [] //laver nyt liste(array) af produkter
        }

        firstData.push(newPost); // Tilføj nye oplysninger til listen af produkter/Add new post to object list

        const response = await fetch(url, {
            method: "PUT", // Overwrites database
            body: JSON.stringify(firstData) // Rewrite database
        });
        const data = await response.json();
        console.log(data);
        //når der trykkes gem, så navigeres brugeren tilbage til admin
        navigate("/admin");
    }

    return (
        <section className="page">
            <h1>Opret nyt produkt</h1>
            <PostForm savePost={createPost} />
        </section>
    );
}
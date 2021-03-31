import image1 from "../../titanic.jpg";
import image2 from "../../princeofpersia.jpg";
import image3 from "../../gladiator.jpg";
import image4 from "../../godfather.jpg";
export const movies = [
    {
        name: "Titanic",
        image: image1,
        description:
            "lTitanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997. Intégrant à la fois des aspects historiques et fictionnels",
        rate: 4,
        trailer: (
            <iframe
                width="675"
                height="506"
                src="https://www.youtube.com/embed/FhA0gXDsgUU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        ),
        id: 1,
    },

    {
        name: "Prince of persia",
        image: image2,
        description:
            "Un prince rebelle est contraint d'unir ses forces avec une mystérieuse princesse pour affronter ensemble les forces du mal et protéger une dague antique capable de libérer les Sables du temps, ",
        rate: 5,
        trailer: (
            <iframe
                width="1045"
                height="435"
                src="https://www.youtube.com/embed/bZ7Li5w2I-k"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        ),
        id: 2,
    },
    {
        name: "Gladiator",
        image: image3,
        description:
            "Gladiator (ou Gladiateur, au Québec et au Nouveau-Brunswick) est un film américano-britannique de Ridley Scott, sorti en 2000.",
        rate: 3,
        trailer: (
            <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/embed/PP5NqL-moHg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        ),
        id: 3,
    },
    {
        name: "The Godfather",
        image: image4,
        description:
            "Le Parrain (The Godfather) est un film américain de Francis Ford Coppola, sorti en 1972. Produit par les studios Paramount, le film est une adaptation du roman ...",
        rate: 3,
        trailer: (
            <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/embed/sY1S34973zA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        ),
        id: 4,
    },
];

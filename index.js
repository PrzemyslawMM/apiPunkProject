import { connection } from "./src/connectToApi.js";
const container = document.querySelector(".container");

const createGallery = async () => {
    const data = await connection();
    console.log(data); //name, image_url, description, first_brewed, food_pairing

    data.forEach((element) => {
        const { name, image_url, description, first_brewed, food_pairing, id } =
            element;
        let [first, second, third, fourth] = food_pairing;
        console.log(food_pairing);
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");
        if (id === 25) {
            newDiv.classList.add("last");
        }
        if (fourth === undefined) fourth = false;
        newDiv.innerHTML = `
            <span class="name">${name} first brewed in ${first_brewed}</span> <br>
            <p class="margin_des"> ${description} </p> <br>
            <img src="${image_url}" alt="${name} image"> <br>
            <p class="margin">In my opinion best food parring with it is: <br> ${first}, ${second}, ${third} ${
            fourth ? `, ${fourth}` : ""
        }</p>`;
        container.append(newDiv);
    });
};

createGallery();

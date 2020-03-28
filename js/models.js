let model1; 
let model2;
let model3;

let modelName = document.querySelector("#modelName");
let modelPhoto = document.querySelector("#modelPhoto");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let eyeColor = document.querySelector("#eyeColor");
let hairColor = document.querySelector("#hairColor");
let description = document.querySelector("#description");

let model1Button = document.querySelector("#erika");
let model2Button = document.querySelector("#stefan");
let model3Button = document.querySelector("#arthur");

model1Button.addEventListener("click", (e) => {
    modelName.innerHTML = model1.nome;
    modelPhoto.src = model1.photo;
    height.innerHTML = model1.height;
    weight.innerHTML = model1.weight;
    eyeColor.innerHTML = model1.eyeColor;
    hairColor.innerHTML = model1.hairColor;
    description.innerHTML = model1.description;

    model2Button.classList.remove("models-image-selected"); 
    model3Button.classList.remove("models-image-selected"); 
    model1Button.classList.add("models-image-selected");
    window.scrollTo(0,0);
});

model2Button.addEventListener("click", (e) => {
    modelName.innerHTML = model2.nome;
    modelPhoto.src = model2.photo;
    height.innerHTML = model2.height;
    weight.innerHTML = model2.weight;
    eyeColor.innerHTML = model2.eyeColor;
    hairColor.innerHTML = model2.hairColor;
    description.innerHTML = model2.description;

    model1Button.classList.remove("models-image-selected");
    model3Button.classList.remove("models-image-selected");
    model2Button.classList.add("models-image-selected"); 
    window.scrollTo(0,0);
});

model3Button.addEventListener("click", (e) => {
    modelName.innerHTML = model3.nome;
    modelPhoto.src = model3.photo;
    height.innerHTML = model3.height;
    weight.innerHTML = model3.weight;
    eyeColor.innerHTML = model3.eyeColor;
    hairColor.innerHTML = model3.hairColor;
    description.innerHTML = model3.description;

    model1Button.classList.remove("models-image-selected"); 
    model2Button.classList.remove("models-image-selected"); 
    model3Button.classList.add("models-image-selected"); 
    window.scrollTo(0,0);
});

window.onload = () => {

    model1 = new Model();
    model2 = new Model();
    model3 = new Model();

    model1.photo = "images/model_1.jpg";
    model1.nome = "Erika Mateo";
    model1.height = "185";
    model1.weight = "57";
    model1.eyeColor = "Green";
    model1.hairColor = "Blonde";
    model1.description = "Erika Mateo, Swendish model, working in the fashion capitals for 6 years, founder of ModelMe, a blog into sustainable lifestyle.";

    model2.photo = "images/model_2.jpg";
    model2.nome = "Racheal Gonzales";
    model2.height = "180";
    model2.weight = "55";
    model2.eyeColor = "Brown";
    model2.hairColor = "Brown";
    model2.description = "Racheal Gonzales, Venezuelan model, working in the fashion capitals for 3 year.";

    model3.photo = "images/model_3.jpg";
    model3.nome = "Arthur G. Lowe";
    model3.height = "196";
    model3.weight = "95";
    model3.eyeColor = "Blue";
    model3.hairColor = "Gray";
    model3.description = "Arthur Lowe, American model, working in the fashion capitals for 12 years.";
}

class Model {
    constructor() {
        this.photo;
        this.nome;
        this.height;
        this.weight;
        this.eyeColor;
        this.hairColor;
        this.description;
    }
}


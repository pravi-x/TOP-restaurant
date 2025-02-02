function about(){
    const container = document.querySelector("div#container");

    // Element creation
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    // Adding text content
    h1.textContent = "About Me";
    p1.textContent = "I am a digital Chef 👨‍🍳!!";
    p2.textContent = "You will find me at a corner of the internet 🌐, if you look close enough 🔍";
    p3.textContent = "Contact📧: mail@digitalrestaurant.food ";

    // Add to DOM
    container.appendChild(h1);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);

}

export {about};
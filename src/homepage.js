function homepage(){
    const container = document.querySelector("div#container");

    // Element creation
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Adding text content
    h1.textContent = "The BEST pasta restaurant";
    p.textContent = "Welcome to my humble web site. Here you will find the best digitsl pasta in the world. Enjoy!";

    // Add to DOM
    container.appendChild(h1);
    container.appendChild(p);

}

export {homepage};
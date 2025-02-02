import menu1Image from './menu1.jpg';
import menu2Image from './menu2.jpg';
import menu3Image from './menu3.jpg';


function menu(){
    const container = document.querySelector("div#container");

    // Element creation
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");

    // Adding text content
    h1.textContent = "Menu";
    p1.textContent = " ROJA ";
    p2.textContent = " VERVE ";
    p3.textContent = " AZUL ";

    const imgSize = "120px";
    // Set image sources
    image1.src = menu1Image;
    image1.style.width = imgSize;
    image1.style.height = imgSize;
    image2.src = menu2Image;
    image2.style.width = imgSize;
    image2.style.height = imgSize;
    image3.src = menu3Image;
    image3.style.width = imgSize;
    image3.style.height = imgSize;

    // Add images to corresponding paragraphs
    p1.insertBefore(image1, p1.firstChild);
    p2.insertBefore(image2, p2.firstChild);
    p3.insertBefore(image3, p3.firstChild);

    // Add to DOM
    container.appendChild(h1);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);

}

export {menu};
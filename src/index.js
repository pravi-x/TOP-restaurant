import "./styles.css";
import { homepage } from "./homepage.js";
import {about} from "./about.js"
import {menu} from "./menu.js"
import pastaImage from './pasta.jpg';

function clearDOM() {
    const container = document.querySelector("#container");
    if (container) {
        container.innerHTML = '';
    }
}

// Add the pasta image before the Home button
const nav = document.querySelector("nav");
const image = document.createElement("img");
image.src = pastaImage;
image.style.width = "90px";
image.style.height = "90px";
nav.insertBefore(image, nav.firstChild);

// Load initial content
homepage();

// the buttons logic
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        clearDOM();
        const buttonId = event.target.id;
        if (buttonId === "home") {
            homepage();
        } else if (buttonId === "about") {
            about();
        } else if (buttonId === "menu") {
            menu();
        }
    });
});
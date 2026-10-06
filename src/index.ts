import classes from "./mystyles.module.css";
import config from "./config";

const h1 = document.createElement("h1");
h1.textContent = "Laboratorio 3: Bundling";
h1.className = classes["text-style"];
document.body.appendChild(h1);

console.log(config.API_BASE);
console.log(config.IS_FEATURE_A_ENABLED);

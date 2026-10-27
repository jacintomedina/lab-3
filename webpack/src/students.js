import { getAvg, getTotalScore } from "./averageService.js";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const totalScore = getTotalScore(scores);

const messageToDisplayAvg = `average score ${averageScore}`;
const messageToDisplayTotal = `total score ${totalScore}`;

const messageElement = document.createElement("p");
messageElement.textContent = messageToDisplayAvg;

const totalElement = document.createElement("p");
totalElement.textContent = messageToDisplayTotal;
document.body.appendChild(totalElement);

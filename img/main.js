const cardBoard = document.querySelector("#cardboard");
const images = [
    "backum.png",
    "backdois.png",
    "backtres.png",
    "backquatro.png",
    "backcinco.png",
    "backseis.png",
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
    <div>
    <img src="img/${img}">
    <img src>="img/front.png">
    <div>
    `
});

cardBoard.innerHTML = cardHTML;
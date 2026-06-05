const imagens = [
    "../assets/imgs/img1.jpg",
    "../assets/imgs/img2.jpg",
    "../assets/imgs/img3.jpg"
];

let imgAtual = 0;

setInterval(() => {
    imgAtual++;

    if (imgAtual >= imagens.length) {
        imgAtual = 0;
    }

    document.getElementById("slide").src = imagens[imgAtual];
}, 3000);
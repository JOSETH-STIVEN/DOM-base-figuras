const figura = document.getElementById('figure');


    function circulo() {
        figura.style.borderRadius= "50%";
        figura.style.background= "red";
    }

    function estrella() {
        figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    }

    function gif() {
        figura.style.backgroundImage = "url(img/XOsX.gif)";
        figura.style.backgroundSize = "cover";

    }

    function animacion() {
        figura.style.animation = "rotar 3s linear infinite";
    }

    function moverA() {
        figura.style.transform = "translateY(-45px)";
    }

    function moverB() {
        figura.style.transform = "translateY(40px)";
    }

    function moverI() {
        figura.style.transform = "translateX(-100px)";
    }

    function moverD() {
        figura.style.transform = "translateX(100px)";
    }

    function titulo() {
        const ntitle= prompt('Ingrese un nuevo Titulo');
        const title=document.getElementById('mainTitle');
        title.textContent = ntitle;
    }

    function parrafo() {
        const nParrafo= prompt('Ingrese un nuevo Parrafo');
        const p=document.getElementById('mainParagraph');
        p.textContent = nParrafo;
    }

    function Aparrafo() {
        const parrafoN= prompt('Ingrese un parrafo a agregar');
        const parrafoX= document.getElementById('extraParagraphs');

        parrafoX.textContent=parrafoN;
    }








document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverA);
    document.getElementById('btnMoveDown').addEventListener('click', moverB);
    document.getElementById('btnMoveLeft').addEventListener('click', moverI);
    document.getElementById('btnMoveRight').addEventListener('click', moverD);
    document.getElementById('btnChangeTitle').addEventListener('click', titulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', parrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', Aparrafo);

})
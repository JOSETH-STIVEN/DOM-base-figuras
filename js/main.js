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
        let ntitle= prompt('Ingrese un nuevo Titulo');
        const title=document.getElementById('mainTitle');
        title.textContent = ntitle;
    }

    function parrafo() {
        let nParrafo= prompt('Ingrese un nuevo Parrafo');
        const p=document.getElementById('mainParagraph');
        p.textContent = nParrafo;
    }

    function Aparrafo() {
        let parrafoN= prompt('Ingrese un parrafo a agregar');
        const parrafoX= document.getElementById('extraParagraphs');

        parrafoX.textContent=parrafoN;
    }


    function eParrafo() {
        const pExtra=document.getElementById('extraParagraphs');
        pExtra.remove();
    }

    function color() {
        const nColor=prompt('Ingrese un color para su figura con #');
        figura.style.background=nColor;
    }

    function eFigura(){
        let cFigura = prompt('Ingrese el nombre de la figura al cambiar sea circulo, estrella o cuadrado');
        switch (cFigura) {
            case 'circulo':
                figura.style.clipPath = 'none';
                figura.style.borderRadius= "50%";
                break;
            case 'cuadrado':
                figura.style.clipPath = 'none';
                figura.style.borderRadius = '0';
                break;
            case 'estrella':
                figura.style.borderRadius = '0';
                figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
                break;
        
            default:
                alert('Figura incorrecta escoja circulo, cuadrado o estrella');
                break;
        }
    }
    let imgActual = 0;
    function cImagenSig() {
        const imagenes = ['img/imagen.jpg', 'img/imagen2.jpg', 'img/imagen3.jpg'];
        const imagenA = document.getElementById('mainImage');
        imagenA.src = imagenes[imgActual];

        imgActual++;

        if (imgActual >= imagenes.length) {
            imgActual = 0;
            
        }
    }

    function cImagenAnt() {
        const imagenes = ['img/imagen.jpg', 'img/imagen2.jpg', 'img/imagen3.jpg'];
        const imagenA = document.getElementById('mainImage');
        imagenA.src = imagenes[imgActual];

        imgActual--;

        if (imgActual < 0) {
            imgActual = imagenes.length - 1;
            
        }
    }

    function mostrarOcultar() {
        const imagen = document.getElementById('mainImage');
        imagen.classList.toggle('oculto');
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
    document.getElementById('btnRemoveParagraph').addEventListener('click', eParrafo);
    document.getElementById('btnHexColor').addEventListener('click', color);
    document.getElementById('btnChooseFigure').addEventListener('click', eFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', cImagenSig);
    document.getElementById('btnChangeImagePrev').addEventListener('click', cImagenAnt);
    document.getElementById('btnToggleImage').addEventListener('click', mostrarOcultar);




})
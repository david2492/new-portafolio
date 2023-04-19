let menuVisible = false;
//funcion que oculta o muestra el menu

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible=false
    } else {
        document.getElementById("nav").classList = "responsive"
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion que aplica las animaciopnes de las habilidades

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("boostrap");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("node");
        habilidades[5].classList.add("csharp");
        habilidades[6].classList.add("sqlserver");
        habilidades[7].classList.add("posgresql");
        habilidades[8].classList.add("github");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("motivacion");
        habilidades[14].classList.add("liderazgo");
        habilidades[15].classList.add("respeto");
        habilidades[16].classList.add("capacidad");
        habilidades[17].classList.add("ayuda");
    }
}

//detecto el scrolling para aplicar las animaciones de la barra de habilidades 
window.onscroll = function() {
    efectoHabilidades();
}


//modo oscuro

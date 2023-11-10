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
        habilidades[3].classList.add("sass");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("csharp");
        habilidades[7].classList.add("sqlserver");
        habilidades[8].classList.add("posgresql");
        habilidades[9].classList.add("github");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("trabajo");
        habilidades[12].classList.add("creatividad");
        habilidades[13].classList.add("dedicacion");
        habilidades[14].classList.add("motivacion");
        habilidades[15].classList.add("liderazgo");
        habilidades[16].classList.add("respeto");
        habilidades[17].classList.add("capacidad");
        habilidades[18].classList.add("ayuda");
    }
}

//detecto el scrolling para aplicar las animaciones de la barra de habilidades 
window.onscroll = function() {
    efectoHabilidades();
}


//modo oscuro

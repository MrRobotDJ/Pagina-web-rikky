const blue_menu = document.querySelector(".menu"); //.querySelector permite traer una clase o un id con poner su nombre en las ""
const burguer_menu = document.querySelector("#burguer-menu");
const ipad = window.matchMedia("screen and (max-width: 640px)");//window.matchMedia permite implementar media-querie en JS

ipad.addListener(validation);//añade escuchadores para activar o desactivar funciones  ()


if(ipad.matches === true){//el evento puede empezar desde una pantalla pequeña y desaparecer cuando sea mas grande la pantalla  
    burguer_menu.addEventListener("click", hide_show);
}//.matches es el atributo de matchMedia que indica si es true o false el ancho de la pantalla


function validation(event){// funcion de si se cumple la resolucion correcto añade el evento hide_show sino se cumple lo borra
    if(event.matches === true){
        burguer_menu.addEventListener("click", hide_show);   //hide_show significa ocultar_mostrar sera el nombre de nuestra funcion
    }
    else{
        burguer_menu.removeEventListener("click", hide_show);  //removeEventListener borra el evento
    }
}

 

function hide_show(){
    if(blue_menu.classList.contains("activate")){//classList.contains permite revisar las clases que contenga un nombre especifico
        blue_menu.classList.remove("activate");//classList.add permite remover clases que tengamos en css hacia html
    }
    else{
        blue_menu.classList.add("activate");//classList.add permite agregar clases que tengamos en css hacia html
    }
    
}

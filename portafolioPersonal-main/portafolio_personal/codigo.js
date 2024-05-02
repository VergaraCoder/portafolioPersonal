let containerRedes=document.querySelector(".containerRedesSociales");

let containerEducacion=document.querySelector(".containerEducacion");

let containerExperiencia=document.querySelector(".containerExperiencia");


containerExperiencia.addEventListener("click",(e)=>{
    let title=document.querySelector(".titleExperiencia");
    title.classList.toggle("peque");
    title.style.marginTop="0px";
    let overlay1=document.querySelector(".overlayHijo1");
    overlay1.classList.toggle("vuelve1");
    containerExperiencia.classList.toggle("negro1");

});



containerEducacion.addEventListener("click",(e)=>{
    let title=document.querySelector(".titleEducacion");
    title.classList.toggle("peque");
    title.style.marginTop="0px";
    containerRedes.style.display="block";
    let overlay1=document.querySelector(".overlayHijo2");
    overlay1.classList.toggle("vuelve2");
    containerEducacion.classList.toggle("negro2");

});


containerRedes.addEventListener("click",(e)=>{
    let title=document.querySelector(".titleRedes");
    title.classList.toggle("peque");

    containerRedes.style.display="block";
    let overlay3=document.querySelector(".overlayHijo3");
    overlay3.classList.toggle("vuelve3");
    containerRedes.classList.toggle("negro3");
});


let containerPadre=document.querySelector(".container4");

let titleProyecto=document.querySelector(".parrafoProyectos");

titleProyecto.addEventListener("click",(e)=>{
    let titleMayor=document.querySelector(".titleBigProyectos");
    titleMayor.classList.toggle("desaparece");
    titleProyecto.classList.toggle("normal");
    let containerInstagram=document.querySelector(".containerProyecto1");
    containerInstagram.classList.toggle("instagram");
    containerPadre.classList.toggle("ampliar");
    let containerGrande=document.querySelector(".containerTodosProyectos");
    containerGrande.classList.toggle("achicar");
})

let boton=document.querySelector(".hobbys");

boton.addEventListener("click",(e)=>{
    let container1=document.querySelector(".container5");
   container1.classList.toggle("ampliar2"); 
   let containerFotos=document.querySelector(".containerFotoHobby");
   containerFotos.classList.toggle("vuelvaHobby");
   boton.classList.toggle("hobbysAmpliado");
});


let cotainerHobbyCaja=document.querySelector(".igual1");
let cotainerHobbyCaja2=document.querySelector(".igual2");

cotainerHobbyCaja.addEventListener("click",(e)=>{
    cotainerHobbyCaja.classList.toggle("ampliarHobbys");
    let parrafo=document.querySelector(".parrafoHobbyFutbol");
    parrafo.classList.toggle("verHobby");
    let baloncito=document.querySelector(".balon");
    baloncito.classList.toggle("giratorio");
});


cotainerHobbyCaja2.addEventListener("click",(e)=>{
    cotainerHobbyCaja2.classList.toggle("ampliarHobbys");
    let parrafo=document.querySelector(".parrafoHobbyBicicleta");
    parrafo.classList.toggle("verHobby2");
    let bicicleta=document.querySelector(".bicicleta");
    bicicleta.classList.toggle("giratorio2");
});
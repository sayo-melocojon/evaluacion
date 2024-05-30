    //Recuperar nombre ingresado en la pagina anterior.
    var dato= localStorage.getItem("user_name");
    document.getElementById("pUser").value = dato;
//se ejecuta en cuanto la página cargue.
document.addEventListener("DOMContentLoaded", function(){
    const datoCard = [
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
        { imagen: "img/alumno.png", nombre: "nombre apellido", edad: "Edad 17", descripcion: "platypus", cantidad:0},
    ];
    const cajaJS = document.getElementById("cajaDiv");
    datoCard.forEach(function(card, index){
        cajaJS.innerHTML +=
        `
        <div class = 'card'>
                <img src='${card.imagen}' alt='${card.nombre}'>
                <h3>${card.nombre}</h3>
                <p>${card.edad}</p>
                <p>${card.descripcion}</p>
                <p>Calificación</p>

                <button onclick="actCont(${index}, 1)" id="sumaH" class="sum_btn">&plus;</button>
                <!--<input type="number" value="0" id="inputH" class="inputCard" readonly> -->
                <spam class="contadorSpam" id="quantity-${index}">${card.cantidad}</spam>
                <button onclick="actCont(${index}, -1)" id="resH" class="res_btn">&minus;</button>

                <br><br><button onclick="openModal(${index})">Ver más</button>
                
            </div>
        `;
    });
    window.actCont = function(index, value){
        const card = datoCard[index];
        card.cantidad += value;
        if(card.cantidad <0) card.cantidad=0;
        if(card.cantidad >10) card.cantidad=10;
        document.getElementById(`quantity-${index}`).textContent = `${card.cantidad}`;
    }
    const sticky = document.getElementById("navSticky");

    const modal = document.getElementById("miModal");
    const modalTitle= document.getElementById("modalTi");          
    const modalImage = document.getElementById("modalImg");
    const modalEdad = document.getElementById("modalEdad");
    const modalCalif = document.getElementById("modalCalif");
    const modalDescription = document.getElementById("modalDes");
    const span = document.getElementsByClassName("cerrar")[0];
    window.openModal = function(index){
        const card = datoCard[index];
        modalTitle.textContent = card.nombre;
        modalImage.src = card.imagen;
        modalEdad.textContent = card.edad;
        modalCalif.textContent = "Calificación: " + card.cantidad + "/10";
        modalDescription.textContent = card.descripcion;
        modal.style.display = "flex";

        sticky.classList.remove("sticky-top"); 
    }
    span.onclick = function(){
        modal.style.display = "none";

        sticky.classList.add("sticky-top"); 
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
            sticky.classList.add("sticky-top");
        }
    }
    
});
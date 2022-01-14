
function AgregarNuevaTarea(){
    let tarea = document.getElementById("tarea").value;
    let li = document.createElement("li");
    // li.addEventListener("click",tareaCompletada);

    let datos = document.createTextNode(tarea);
    li.appendChild(datos); //Agregamos el texto de la tarea al elemento li
    CrearBotones(li);
    if(tarea == ""){
        alert("Debes agregar una tarea");
    }else{
        document.getElementById("tareas_elementos").appendChild(li);
        document.getElementById("tarea").value = "";
    }

}


function CrearBotones(padre){
    // let editar = document.createElement("button");
    // let editText = document.createTextNode("Editar")
    // editar.appendChild(editText);
    // padre.appendChild(editar);

    let eliminar = document.createElement("button");
    eliminar.classList.add("cerrar")
    let elimText = document.createTextNode("Eliminar")
    eliminar.appendChild(elimText);
    eliminar.addEventListener("click",EliminarTarea);
    padre.appendChild(eliminar);

}


// var elementosLi = document.getElementsByClassName("cerrar")
// console.log(elementosLi);

function EliminarTarea(defecto){
    if(defecto.parentElement == undefined){
        let elementoLi = this.parentElement;
        elementoLi.classList.add('oculto');
    }else{
        defecto.parentElement.classList.add('oculto');
    }
    
    listaElementos = document.getElementById('tareas_elementos');
    console.log(listaElementos)
}

// function tareaCompletada(e){

// console.log(e.target);
// }
let tareaCompletada = document.querySelector("ul")
tareaCompletada.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    }
  }, false);
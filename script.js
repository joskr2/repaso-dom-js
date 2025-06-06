// @ts-nocheck
const campoTarea = document.getElementById("campoTarea");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");
const contadorTareas = document.getElementById("contadorTareas");
const estadoVacio = document.getElementById("estadoVacio");
const encabezado = document.querySelector(".encabezado");
const contenedor = document.querySelector(".contenedor-principal");
const botonesFiltro = document.querySelectorAll(".boton-filtro");

// biome-ignore lint/style/useConst: <explanation>
let tareas = []
let idContadorTareas = 1

const crearElementoTarea = (dataTarea) => {
  // crear un elemento principal
  const itemLista = document.createElement('li')
  itemLista.className = "elemento-tarea";
  itemLista.setAttribute("data-tarea-id", dataTarea.id);
  //listItem.setAttribute('mi-nuevo-atributo','1223345')

  // crear un checkbox
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = "checkbox-tarea"
  checkbox.checked = true

  const textoTarea = document.createElement('span')
  textoTarea.className = "texto-tarea";
  textoTarea.textContent = dataTarea.texto


  if(dataTarea.completado){
    textoTarea.classList.add('completada')
  }

  const botonEliminar = document.createElement("button")
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = 'Eliminar'


  itemLista.appendChild(checkbox)
  itemLista.appendChild(textoTarea)
  itemLista.appendChild(botonEliminar)


  listaTareas.appendChild(itemLista)

  return itemLista
}

const agregarNuevaTarea = () => {

  const textoTarea = campoTarea.value.trim()  || ""

  if(textoTarea === ""){
    alert("Por favor escribe una tarea!!")
  }

  const nuevaTarea = {
    id:idContadorTareas++,
    texto:textoTarea,
    completada:false,
    creadoEl:new Date()
  }

  tareas.push(nuevaTarea)
  crearElementoTarea(nuevaTarea)
  campoTarea.value = ""
  // actualizarContadorTareas();

  estadoVacio.style.display = 'none'
  console.log("Tarea agregada",nuevaTarea)

}

const actualizarContadorTareas = () => {
  const totalTareas = tareas.length
  // filter "filtra" los elementos por una condicion, en este caso le esteoy diciendo , si mi tarea esta completada guardala en tareas completadas
  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const tareasPendientes = totalTareas - tareasCompletadas

  contadorTareas.textContent = `${totalTareas} tareas ${tareasPendientes} pendientes`
}

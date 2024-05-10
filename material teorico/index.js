console.log(window.document);
console.log(document.body);
console.log(document.images);




// Conceptos fundamentales de la API del DOM
//  .seleccionar elementos
//  .crear nuevos elementos
//  .agregar y eliminar elementos
//  .manipular propiedades y contenido de elementos
//  . manejar eventos

// Seleccionar elementos:
// Selecciona un elemento por su ID
const titulo = document.getElementById('tituloPrincipal');
console.log(titulo); // Muestra el elemento con el ID 'miElemento'

// Selecciona el primer elemento que coincide con el selector CSS
const primerElemento = document.querySelector('div.miClase');
console.log(primerElemento); // Muestra el primer elemento <div> que tiene la clase 'miClase'

// Selecciona todos los elementos que coinciden con el selector CSS
// Devuelve un NodeList (una colección de nodos)
const todosElementos = document.querySelectorAll('div.miClase, p.otro');
console.log(todosElementos); // Muestra un NodeList con todos los elementos <div> con clase 'miClase' y elementos <p> con clase 'otro'


//********** otras formas menos usadas ***********
// Selecciona todos los elementos que tienen la clase especificada
// Devuelve un HTMLCollection (una colección de elementos HTML)
const misElementos = document.getElementsByClassName('miClase');
console.log(misElementos); // Muestra una HTMLCollection con los elementos que tienen la clase 'miClase'

// Selecciona todos los elementos con la etiqueta especificada
// Devuelve un HTMLCollection
const parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una HTMLCollection con todos los elementos <p>

// ------------------------------------------------------------------------
//--Agregar y eliminar elementos

// modificamos contenido del titulo
titulo.innerText = "manipulanDOM";//reemplaza todo el contenido del elemento por el texto
titulo.innerHTML = "<em>MANIPULANDO EL DOM</em>";//Permite insertar contenido HTML

// modificamos atributos o clases
let imagen = document.querySelector('.main-div img');//selector css
imagen.src = "img/sunset-8516639_640.jpg";
imagen.classList = "img-fluid";

let mainDiv = document.querySelector('.main-div');
mainDiv.style.backgroundColor = "#ffcc00";
// mainDiv.style.color = "#ffffff";

// remover elementos
let oldDiv = document.querySelector('.old-div');
oldDiv.remove();

// crear elementos
let newDiv = document.createElement('div');
console.log(newDiv);
newDiv.innerText = "SOY EL NUEVO DIV !!!"
mainDiv.appendChild(newDiv);

// antes de la imagen
// mainDiv.insertBefore(newDiv, imagen);

// ---------------------------------------------------------------------
// Eventos:acciones que realizamos como usuarios en un web

let boton = document.getElementById('boton');
// agregando funcion
// boton.addEventListener('click',function(){
//         alert("CLICK!");
// })

// con referencia a un funcion
function mostrarMensaje() {
    alert("CLICK!");
}
boton.addEventListener('click', mostrarMensaje);

// --------------------------------------------------------------------------
// *** lista dinamica ***

let input = document.getElementById('itemInput');
let addBoton = document.getElementById('botonAñadir');
let lista = document.getElementById('listaDinamica');

addBoton.addEventListener('click', function () {
    if (input.value !== "") {
        let nuevoItem = document.createElement('li');
        nuevoItem.innerText = input.value;
        lista.appendChild(nuevoItem);
        // borrar ingreso de input
        input.value = "";
    }
})

// --------------------------------------------------------------------------
// filtrado dinamico
let filterInput = document.getElementById('filterInput');
const itemsList = document.getElementById('itemsList');

filterInput.addEventListener('keyup', function () {

    const ingreso = filterInput.value.toLowerCase();
    const items = itemsList.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(ingreso) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
})

// indexOf :
//  método en JavaScript que se utiliza para buscar la primera aparición de un elemento especificado dentro de un array y devuelve el índice de esa aparición. Si el elemento no se encuentra en el array, devuelve -1.
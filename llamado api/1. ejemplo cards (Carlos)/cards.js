const arraysCards = [];

function main() {
    //simular la carga de datos en el array(Rest API)
    arraysCards.push(
        {
            id: Math.random(),
            title: 'Vacaciones de otoño',
            descripcion: 'Vacaciones en otoño: Bosques coloreados, caminatas entre hojas, tardes acogedoras, momentos tranquilos, experiencias inolvidables en la naturaleza.',
            imageSrc: 'img/otoño.jpg'
        },
        {
            id: Math.random(),
            title: 'Vacaciones de primavera',
            descripcion: 'Vacaciones en primavera: Jardines floridos, aromas frescos, días soleados, excursiones revitalizantes, renacer de la vida, momentos memorables al aire libre.',
            imageSrc: 'img/atardecer.jpg'
        }
    )

    // llamo a la funcion Cards(arrays)
    Cards(arraysCards);
}

function Cards(cards) {
    //iterar las cards y por cada uno dibujar un card
    // for (let card of cards) {
    //     document.getElementById('cards').innerHTML += Card(card);
    // }

    // usando la funcion .map() + .join()
    const htmlCards = cards.map(card => Card(card));
    document.getElementById('cards').innerHTML = htmlCards.join('');


}

function Card(card) {
    //retornamos un template strings
    console.log(card);
    return `
    <div class="card" style="width: 18rem;">
        <img src="${card.imageSrc}" class="card-img-top" alt="${card.descripcion}">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.descripcion}</p>
            <a href="#" class="btn btn-primary">Ir a la descripcion</a>
        </div>
    </div>
    `
}

//cuando se carga la pagina se invoca
main();
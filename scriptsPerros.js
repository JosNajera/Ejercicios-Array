let animales = [];

function agregarPG() {
    const input = document.getElementById('entrada').value;
    const valoresArray = input.split(/\s+/);

    animales = animales.concat(valoresArray);

    document.getElementById('entrada').value = '';
    separarPG();
}

function separarPG() {
    let perros = animales.filter(animal => animal.toLowerCase() === 'perro');
    document.getElementById('salidaPerros').innerHTML = perros;

    let gatos = animales.filter(animal => animal.toLowerCase() === 'gato');
    document.getElementById('salidaGatos').innerHTML = gatos;
}
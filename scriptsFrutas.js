let frutas = [];

function agregarFrutas() {
    const input = document.getElementById('entrada').value;
    const valoresArray = input.split(/\s+/);

    frutas = frutas.concat(valoresArray);
    
    document.getElementById('entrada').value = '';
}

function asignarFrutas() {
    let manzanas = frutas.filter(fruta => fruta.toLowerCase() === 'manzana');
    document.getElementById('totalManzanas').innerHTML = "Tienes "+ manzanas.length +" manzanas";

    let duraznos = frutas.filter(fruta => fruta.toLowerCase() === 'durazno');
    document.getElementById('totalDuraznos').innerHTML = "Tienes "+ duraznos.length +" duraznos";

    let peras = frutas.filter(fruta => fruta.toLowerCase() === 'pera');
    document.getElementById('totalPeras').innerHTML = "Tienes "+ peras.length +" peras";
}

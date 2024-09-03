let objetos = [];

function agregar() {
    const input = document.getElementById('entrada').value;
    const valoresArray = input.split(/\s+/);

    objetos = objetos.concat(valoresArray);

    document.getElementById('entrada').value = '';
}

function buscar(){

    const busqueda = document.getElementById('entradaBusqueda').value;

    if(objetos.includes(busqueda)){

        document.getElementById('salidaBusqueda').innerHTML = "El objeto si se encuentra aquí"
        document.getElementById('entradaBusqueda').value = '';

    }else{

        document.getElementById('salidaBusqueda').innerHTML = "El objeto no se encuentra aquí"
        document.getElementById('entradaBusqueda').value = '';
    }
}
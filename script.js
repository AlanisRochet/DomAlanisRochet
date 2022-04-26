class Ingredientes {
    constructor(ingrediente,cantidad){
        this.ingrediente=ingrediente;
        this.cantidad=cantidad;
    }
}
let listaDeIngredientes= [];

const guardarIngrediente = () => {
    let ingrediente = document.getElementById ("ingrediente").value;
    let cantidad= parseInt(document.getElementById("cantidad").value);

    let nuevoIngrediente = new Ingredientes(ingrediente,cantidad);
    listaDeIngredientes.push(nuevoIngrediente);
}


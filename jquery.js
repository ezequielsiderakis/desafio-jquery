class Celulares {
    constructor(marca, modelo, memoria, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = memoria;
        this.color = precio;
    }
}

let celu = []

$( () => {
    $("#formCelulares").submit((e) => {
        e.preventDefault()

      let celuForm = new Celulares( $("#marca").val(), $("#modelo").val(), $("#memoria").val(), $("#precio").val())
      celu.push(celuForm)
      localStorage.setItem("autos", JSON.stringify(celu))  
    })

$("#botonCelular").click( () => {
     let arrayCelus = JSON.parse(localStorage.getItem("celu"))
        
     arrayCelus.forEach((celuArray, indice) => {

        $("#divCelus").append( `
                                <div class="card bg-light mb-3" id="celu${indice}" style="max-width: 20rem;">
                                <div class="card-header">${celuArray.marca} ${celuArray.modelo} </div>
                                 <div class="card-body">
                                 <h4 class="card-title">Memoria ${celuArray.memoria}</h4>
                                  <p class="card-text">$ ${celuArray.precio} </p>
                                 </div>
                                </div>
        `  )
         
     });

})

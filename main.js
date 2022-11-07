


const getValueInput = () =>{
    let Categoria = document.getElementById("categoria").value
    let Cantidad = document.getElementById("cantidad").value; 
    var coste = 200
    var tickets = 0 
    var descuentoDeEstudiante = 0.8
    var descuentoDeTrainee = 0.5
    var descuentoDeJunior = 0.15
    var precioFinal = 0

        if(Cantidad === 1){
            tickets = 200
            if(Categoria === "Estudiante"){
                precioFinal =   tickets * descuentoDeEstudiante 
            }
            if(Categoria === "Trainee"){
                precioFinal =  tickets - tickets * descuentoDeTrainee
            }
            if(Categoria === "junior"){
                precioFinal = tickets - tickets * descuentoDeJunior
            }
            
        }else if(Cantidad > 1){
            tickets = coste * Cantidad
            if(Categoria === "Estudiante"){
            precioFinal = tickets - tickets * descuentoDeEstudiante
            }
            if(Categoria === "Trainee"){
                precioFinal = tickets - tickets * descuentoDeTrainee
            }
            if(Categoria === "junior"){
                precioFinal = tickets - tickets * descuentoDeJunior
            }  
        }
        precioFinal = "Total a pagar :$" + precioFinal
    document.getElementById("PagoTotal").innerHTML = precioFinal; 
  }
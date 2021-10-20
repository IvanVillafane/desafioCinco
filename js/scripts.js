let vacacionesCalc = document.getElementById("vacacionesCalc")

vacacionesCalc.addEventListener("submit",calcExpenses)

function getValues(){
    let destino = document.getElementById("destino").value ,
    alojamiento = document.getElementById("alojamiento").value ,
    presupuesto = document.getElementById("presupuesto").value,
    transporte = document.getElementById("transporte").value ,
    comida = document.getElementById("comida").value;
    
    return{
        destino , alojamiento ,presupuesto ,transporte,comida
    }
}

function calcExpenses(e){
e.preventDefault();

const {
    destino , alojamiento ,presupuesto ,transporte,comida
}= getValues();
    

    console.log(destino,presupuesto,alojamiento,transporte,comida)
let expenses = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida)
let balance = presupuesto - expenses
UI(presupuesto , balance , destino) 
}


function UI(presupuesto , balance , destino){
    let resultado = document.getElementById("resultado")
    let dataPrint = document.createElement("div")

    dataPrint.innerHTML = `
    <div class="container-data row">
     <div class="col-4">
     <h6>${destino}</h6></div>
     <div class="col s4">
     <h6>${presupuesto}</h6></div>
     <div class="col s4">
     <h6>${balance}</h6></div>
     </div>
    </div> `

    resultado.appendChild(dataPrint)

    Reset();

    
}

function Reset(){ document.getElementById("vacacionesCalc").reset()} 
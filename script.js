//Variable de llamado  elementos Html   <-------------

let botones = document.getElementsByClassName('btn')
let display = document.getElementById('Display')
let operadores = document.getElementsByClassName('simbolo')
let igual = document.getElementById('igual')
let porcentaje = document.getElementById('porcentaje')

//Variables de Calculo <---------------------
let num1;
let num2;
let operador;
let resultado;

// Funciones         <-------------------

//Formato numerico (solo para display)
function formatearNumero(numero) {
    return numeral(numero).format('0,0');
}

//Captura de Numero presionado
function mostrar(){
    contenido = this.textContent
    if (/^[0-9]+$/.test(contenido)){
        numero = display.innerText+=contenido
        display.innerText=formatearNumero(numero)
        
    }
}

//Operacion y almacenamiento de numeros y operadores en variables de calculo

function Operador(){
    operador = this.textContent
    if (operador === '+/-') {
        if (Number(display.textContent) !== 0) {
            display.innerText = -1 * Number(display.textContent);
        }
        display.innerText = formatearNumero(display.innerText);
        
    }
    else if (operador=='C'){
        num1=undefined
        display.innerText=''
    }
    else if(operador=='<'){
        display.innerText = display.innerText.slice(0,display.innerText.length-1)
    }

    else{
        if (num1==undefined){
            num1 = Number(display.textContent.replace(/,/g, ""));///<------Reemplazo de ','(formateo display) para evitar NaN por incompatibilidad
            display.innerText=''
            
        }
        else if(num1!=undefined){
            display.innerText=''
        }
    }
}


function Igual(){
    if(num2==undefined){
        num2= Number(display.textContent.replace(/,/g, ""));//<------Reemplazo de ','(formateo display) para evitar NaN por incompatibilidad
        
    }

    if (operador=='X'){
        resultado = num1*num2
    }
    else if(operador=='+')
    {resultado = num1+num2}

    else if(operador=='-')
    {resultado = num1-num2}

    else if(operador=='/')
    {resultado = num1/num2}
    
    display.innerText = resultado.toLocaleString()
    num2=undefined
    num1=resultado
    
}

function Porciento(){
    if(num2==undefined){
        num2= Number(display.textContent.replace(/,/g, ""));//<------Reemplazo de ','(formateo display) para evitar NaN por incompatibilidad
        
    }

    if (operador=='X'){
        resultado = num1*(num2/100)
        console.log(resultado)
    }
    else if(operador=='+')
    {resultado = num1+(num2/100)
    console.log(resultado)}

    else if(operador=='-')
    {resultado = num1-(num2/100)
    console.log(resultado)}

    else if(operador=='/')
    {resultado = num1/(num2/100)
    console.log(resultado)}
    
    display.innerText = resultado
    num2=undefined
    num1=resultado
    
}


//Capturadores de Eventos

//Numeros
for (let i = 0;i<botones.length;i++){
    botones[i].addEventListener('click',mostrar)
}
//Operadores
for (let i = 0;i<operadores.length;i++){
    operadores[i].addEventListener('click',Operador)
}
//Resultado
igual.addEventListener('click',Igual)
//Porcentaje
porcentaje.addEventListener('click',Porciento)
/*function contarSegundo(){
    const segundo = new Date()
    newSegundo = segundo.getSeconds()
    document.getElementById("segundos").textContent = newSegundo;
}

setInterval(contarSegundo, 1000)*/
let hora = 0;
let minuto = 0;
let segundo = 0;
let contador;

function iniciar(){
    contador = setInterval(contar, 1000)
    document.getElementById("iniciar").disabled = true;
    let audio = new Audio('audios/iniciarContagem.mp3')
    audio.play();
}

function pausar(){
    clearInterval(contador)
    document.getElementById("iniciar").disabled = false;
}

function zerar(){
    clearInterval(contador)
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    document.getElementById("iniciar").disabled = false;
}

function doisDigitos(element){
    if(element < 10){
        return "0" + +element;
    }else{
        return element;
    }
}

function contar(){
    segundo++;
    if(segundo>=60){
        minuto++;
        segundo = 0;   
    }if(minuto==60){
        hora++;
        minuto = 0;
        segundo = 0;
    }
    document.getElementById("segundos").textContent = doisDigitos(segundo);
    document.getElementById("minutos").textContent = doisDigitos(minuto);
    document.getElementById("horas").textContent = doisDigitos(hora);
}
















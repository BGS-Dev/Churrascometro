let qadultos = document.getElementById("adultos");
let qkid = document.getElementById("kid");
let qtime = document.getElementById("time");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = qadultos.value;
    let kid = qkid.value;
    let duracao = qtime.value;

    let quanTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * kid);
    let quanTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * kid);
    let quanTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p>${quanTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quanTotalCerveja/355)} latas de Cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(quanTotalBebidas / 2000)} Garrafas de 2L de Bebidas</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
    
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
    
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }

}


function escuroentrou(x){
        x.style.backgroundColor = "black";
        x.style.color = "white";
}

function escurosaiu(x){
    x.style.backgroundColor = "white";
    x.style.color = "black";
}

function escuro(){
    let body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = "black";

}

function claro(){
    let body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = "white"
}

function claroentrou(x){
    x.style.backgroundColor = "#C0C0C0";
    x.style.color = "white";
}

function clarosaiu(x){
    x.style.backgroundColor = "white";
    x.style.color = "black";
}



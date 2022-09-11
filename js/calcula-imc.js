const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; 

const pacientes = document.querySelectorAll(".paciente");

for(let i=0;i<pacientes.length;i++){
const paciente = pacientes[i];
const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

const tdImc = paciente.querySelector(".info-imc");

let pesoEvalido= validaPeso(peso);
let alturaEvalido = validaAltura(altura);

if(!pesoEvalido){
    tdImc.textContent = "Peso inválido!";
    pesoEvalido = false;
    paciente.classList.add("paciente-invalido");
}
if(!alturaEvalido){
    tdImc.textContent = "Altura inválida";
    alturaEvalido = false;
    paciente.classList.add("paciente-invalido");
}
if(pesoEvalido && alturaEvalido){
const imc = calculaImc(peso,altura);
tdImc.textContent = imc;
}}

function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >=0 && altura <=3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    let imc = 0;
    imc= peso/(altura*altura);
    return imc.toFixed(2)
}
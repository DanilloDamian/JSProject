const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");
    const paciente= obtemPacienteDoFormulario(form);
    
    const erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);        
        return;
    }
    adicionaPacienteNaTabela(paciente);
    form.reset();
    const mensagemErro= document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML ="";
});
function adicionaPacienteNaTabela(paciente){
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};
function obtemPacienteDoFormulario(form){
    const paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return pacienteTr;
}

function montaTd(dado,classe){
    const td= document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    const erros =[];
    if(paciente.nome.length==0) erros.push("O nome não pode ser em branco");
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso é inválido!");
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push("Altura é inválida!");
    if(paciente.gordura.length == 0) erros.push("Gordura é inválida!");
    return erros;
}

function exibeMensagensDeErro(erros){
    const ul= document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        const li= document.createElement("li");
        li.textContent= erro;
        ul.appendChild(li);
    });
}
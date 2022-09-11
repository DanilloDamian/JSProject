const tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    let x;
    let r= confirm("Tem certeza que deseja excluir paciente?");
    if(r==true){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    }else{
        alert("Você desistiu de excluir o paciente");
    }
});




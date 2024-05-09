/*  AÇÕES DIRETAMENTE NAS LINHAS DA TABELA 
var encomendas = document.querySelectorAll(".cliente");

encomendas.forEach(function(linha){
    linha.addEventListener("dblclick", function(){
        this.remove();
    });
}); */

/*AÇÕES NA TABELA */
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
                //Captura a TR da TD que sofreu o duplo clique e remove
                event.target.parentNode.remove();
               }, 500);
    
});
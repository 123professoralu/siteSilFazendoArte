var botaoBuscar = document.querySelector("#buscar-encomendas");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function(){
        var resposta=xhr.responseText;

        //Converte a string em objeto JS
        var encomendas = JSON.parse(resposta);

        //Insere as encomendas na tabela
        encomendas.forEach(function(encomenda){
            addEncomenda(encomenda);
        })
        
    });
    xhr.send();
});
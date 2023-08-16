/** altera o elemento h1 da página */
function trocarFrase(){
    var fraseAtual = document.getElementById("frase");
    fraseAtual.innerHTML = "Funcionou, a frase mudou!";
    fraseAtual.style.color = "red";
    fraseAtual.style.fontSize = "25px";
    fraseAtual.style.backgroundColor = "yellow";

    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    fraseAtual.innerHTML = "<img src=\'img/a.jpeg\' />";
}

function trocarClasse(){
    var fraseAtual = document.getElementById("frase");
    fraseAtual.className = "h1_2";
}

function trocarTexto(){
    //pegando o h1
    var fraseAtual = document.getElementById("frase");

    // pegando o valor do input
    var nova = document.getElementById("novaFrase").value;
    fraseAtual.innerHTML = nova;
}

function gebi(id){
    return document.getElementById(id)
}

function somar(){
    let valorN1 = parseInt( gebi("n1").value )
    let valorN2 = parseInt( gebi("n2").value )
    let resultadoDaSoma = valorN1 + valorN2
    gebi("resultado").value = resultadoDaSoma
}

function exponenciação(){
    let valorN1 = parseInt(gebi("n1").value)
    let valorN2 = parseInt(gebi("n2").value)    
    gebi("resultado").value = valorN1**valorN2
}

function iguais(){
    let valorN1 = parseInt(gebi("n1").value)
    let valorN2 = parseInt(gebi("n2").value)

    if(valorN1 === valorN2){ // Comparando. São iguais?
        gebi("resultado").value = "São iguais!"
    }else{
        gebi("resultado").value = "São diferentes!"
    }
}

function pares(){
    let valorN1 = parseInt(gebi("n1").value)
    let valorN2 = parseInt(gebi("n2").value)

    if(valorN1 % 2 == 0){ // resto da divisao
        if(valorN2 % 2 == 0){
            gebi("resultado").value = "São ambos pares!"
            gebi("resultado").style.borderColor = "green";
        }else{
            gebi("resultado").value = "Não são ambos pares!"
            gebi("resultado").style.borderColor = "red";
        }
    }else{
        gebi("resultado").value = "Não são ambos pares!"
        gebi("resultado").style.borderColor = "red";
    }
}

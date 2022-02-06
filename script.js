let qtdcartas = 0;
let par = 0;
let div = [];
let img = ["unicornparrot", "tripletsparrot", "metalparrot", "revertitparrot", "fiestaparrot", "explodyparrot", "bobrossparrot"]
let imagenscolhidas = []
let cartaclicada
let primeiracarta
let segundacarta 
let comparacao
let bloquearcartas
let numerodejogas = 0;
let fimdejogo = 0;
let acertos = 0;
let novapartida = "";


// ---------PROMPT - QUANTIDADE DE CARTAS----------

while(qtdcartas<4 || qtdcartas>15 || par!==0){
    qtdcartas=prompt("Quantas cartas você quer jogar?");
    qtdcartas=parseInt(qtdcartas);
    par = qtdcartas%2;
}

// ---------EMBARALHAR CARTAS -----------------

for(let i=0; i < qtdcartas/2; i++){
    imagenscolhidas.push(img[i]);
    imagenscolhidas.push(img[i]);
}

function comparador() { 
	return Math.random() - 0.5; 
}

imagenscolhidas.sort(comparador);

// ----------CRIAR DIVS DINÂMICAS ------------

for(i = 0; i < qtdcartas; i++){          
    div[i] =(`
    <div class="umacarta" data-cartabla = "${imagenscolhidas[i]}">
        <div class="frente face rotacionar">
            <img src="arquivosuteis/${imagenscolhidas[i]}.gif">
        </div>
        <div class="verso face">
            <img src="arquivosuteis/frente1.png">
        </div>
    </div>
    `);
    addcartas=document.querySelector(".cartas");
    addcartas.innerHTML+=div[i];
}

// ----------- FUNCIONAMENTO DO JOGO -----------

let todasascartas = document.querySelectorAll(".umacarta")

function virarCarta(){
    console.log(numerodejogas)
    if(bloquearcartas){
        return false;
    }
    this.classList.add("rotacionar");
    if(!primeiracarta){
        primeiracarta = this;
        primeiracarta.classList.add("rotacionar");
        return false;
    }
    segundacarta = this;
    compararcartas();
}

todasascartas.forEach(carta => carta.addEventListener('click', virarCarta));

function compararcartas(){
    comparacao = primeiracarta.dataset.cartabla === segundacarta.dataset.cartabla;
    if(comparacao == false){
        cartasDiferentes();
    }else{
        primeiracarta.removeEventListener('click',virarCarta);
        segundacarta.removeEventListener('click',virarCarta);
        limparVariaveis();
        acertos +=1;
    }
    finalizarpartida();
    fimdejogo +=1;
}

function cartasDiferentes(){
    bloquearcartas = true;  
    setTimeout(() => {
    primeiracarta.classList.remove("rotacionar");
    segundacarta.classList.remove("rotacionar");
    bloquearcartas = false;
    limparVariaveis();},1000);
}

function limparVariaveis(){
    primeiracarta=null;
    segundacarta=null;
}

function finalizarpartida(){
    setTimeout(() => {if(acertos == parseInt(qtdcartas)/2){
                        alert("Você ganhou em "+fimdejogo+" jogadas!")
                        começarnovapartida();}},1000);
}

function começarnovapartida() {
    novapartida=prompt("Gostaria de começar uma nova partida? (sim/não)")
    if(novapartida === "sim"){
        window.location.reload()
    }else{
        alert("Tão ta baum 😅")
    }
}
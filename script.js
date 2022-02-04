let qtdcartas = 0;
let par = 0;
let div = [];
let img = ["unicornparrot", "tripletsparrot", "metalparrot", "revertitparrot", "fiestaparrot", "explodyparrot", "bobrossparrot"]
let imagenscolhidas = []
let cartaclicada
let primeiracarta
let segundacarta 

// ---------PROMPT - QUANTIDADE DE CARTAS----------

while(qtdcartas<4 || qtdcartas>15 || par!==0){
    qtdcartas=prompt("Quantas cartas...?");
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

imagenscolhidas.sort(comparador)

// ----------CRIAR DIVS DINÂMICAS ------------

for(i = 0; i < qtdcartas; i++){          
    div[i] =(`
    <div class="umacarta">
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

// -----------ROTACIONAR CARTAS AO CLICAR 

let todasascartas = document.querySelectorAll(".umacarta")

function virarCarta(){
    if(!primeiracarta){
        primeiracarta = this;
        return false;
    }

    segundacarta = this;

    if(primeiracarta!=null && segundacarta!=null){
        this.classList.toggle("rotacionar");
        primeiracarta.classList.toggle("rotacionar")
    }
}

todasascartas.forEach(carta => carta.addEventListener('click', virarCarta))


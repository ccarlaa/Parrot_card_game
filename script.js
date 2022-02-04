let qtdcartas = 0;
let par = 0;
let div = [];
let img = ["arquivosuteis/unicornparrot.gif", "arquivosuteis/tripletsparrot.gif", "arquivosuteis/metalparrot.gif", "arquivosuteis/revertitparrot.gif", "arquivosuteis/fiestaparrot.gif", "arquivosuteis/explodyparrot.gif",  "arquivosuteis/bobrossparrot.gif",]
let imagenscolhidas = []


while(qtdcartas<4 || qtdcartas>15 || par!==0){
    qtdcartas=prompt("Quantas cartas...?");
    qtdcartas=parseInt(qtdcartas);
    par = qtdcartas%2;
}

for(let i=0; i < qtdcartas/2; i++){
    imagenscolhidas.push(img[i]);
    imagenscolhidas.push(img[i]);
}

function comparador() { 
	return Math.random() - 0.5; 
}

imagenscolhidas.sort(comparador)

for(i = 0; i < qtdcartas; i++){          
    div[i] =(`
    <div class="umacarta" onclick="virarCarta(this)">
        <div class="frente face rotacionar">
            <img src="${imagenscolhidas[i]}">
        </div>
        <div class="verso face">
            <img src="arquivosuteis/frente1.png">
        </div>
    </div>
    `);
    addcartas=document.querySelector(".cartas");
    addcartas.innerHTML+=div[i];
}


function virarCarta(divselecionada){
   divselecionada.classList.toggle("rotacionar")
}


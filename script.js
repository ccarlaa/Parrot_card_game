let qtdcartas = 0;
let par = qtdcartas%2;
let div = "";
let addcartas;
while(qtdcartas<4 || qtdcartas>15 || par!=0 ){
    qtdcartas = prompt("Quantas cartas...?");  
    qtdcartas = parseInt(qtdcartas);
}

for(let i=0; i < qtdcartas; i++){
    div += '<div class="umacarta"></div>';
}

addcartas=document.querySelector(".cartas");
addcartas.innerHTML=div;

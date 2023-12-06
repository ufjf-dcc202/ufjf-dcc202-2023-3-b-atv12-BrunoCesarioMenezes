import {getEstoque} from "./estoque.js";

const olJoao = document.querySelector("ol#joao");
const olMaria = document.querySelector("ol#maria");

document.entrada.addEventListener('submit', leFormulario);

atualizaTela();

function leFormulario(event){

    event.preventDefault();
    const quantidade = document.entrada.quantidade.value;
    valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
}

function atualizaTela(){
    const estoque = getEstoque();
    olJoao.innerHTML = "";
    for (let i=0; i<estoque.joao.length; i++){
        const monte = estoque.joao[i];
        const li = document.createElement('li');
        li.textContent=`${monte.tipo}: ${monte.qtd}`;
        olJoao.append(li);
    }
}
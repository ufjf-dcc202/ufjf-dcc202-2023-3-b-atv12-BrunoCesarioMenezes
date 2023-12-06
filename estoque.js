let estoque = {
  'joao': [
    {'tipo':'maca','qtd':1},
    {'tipo':'pera','qtd':2}
  ],
  'maria': [
    {'tipo':'maca','qtd':2},
    {'tipo':'banana','qtd':4}
  ] 
};

function getEstoque(){
    return structuredClone(estoque);
}

function transacao(origem, destino, tipo, quantidade){
    if (destino === "pomar"){
        dePessoaParaPomar(origem, tipo, quantidade);
        return;
    }
    if (origem === "pomar"){
        dePomarParaPessoa(destino,tipo,quantidade);
        return;
    }
}

function dePomarParaPessoa (destino, quantidade){
    const pessoa = estoque[destino];
        for (let i = 0; i<pessoa.length; i++){
            const monte = pessoa[i];
            if (monte.tipo === tipo){
                monte.qtd += Math.max (quantidade, 0);
                return;
            }
        }
        const novoMonte = {'tipo': tipo, 'qtd': Math.max (quantidade,0)};
        pessoa.push(novoMonte);
}

function dePessoaParaPomar (origem, tipo, quantidade){
    const pessoa = estoque[origem];
        for (let i=0; i<estoque[origem].length; i++){
            const monte = pessoa [i];
            if(monte.tipo === tipo){
                monte.qtd -= Math.min (quantidade, monte.qtd);
                return;
            }
        }
}

export {getEstoque,transacao};

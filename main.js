var Ataque_A;
var Defesa_A;

var Ataque_B;
var Defesa_B;

var carta = {};

function Selecionar(nome){
    
    carta = nome;
    console.log(carta);
}

function Atacar(alvo){
    var dano = carta.ataque - alvo.defesa;

    if(carta.ataque == alvo.defesa){
        alert('empate');
    }else if(carta.ataque > alvo.defesa){
        alvo.pontos_de_vida -= dano;
    }else if(carta.ataque < alvo.defesa){
        carta.pontos_de_vida += dano;
    }
    console.log(carta.nome + " atacou " + alvo.nome);
    console.log("PV atacante " + carta.pontos_de_vida);
    console.log("PV atacado" + alvo.pontos_de_vida);
};


window.onload = function inicio(){
    document.getElementById("Berk").innerHTML = Berk_tropa.nome;
    document.getElementById("TrollSafira").innerHTML = TrollSafira_tropa.nome;
    document.getElementById("OrfaFloresta").innerHTML = OrfaFloresta_tropa.nome;
}
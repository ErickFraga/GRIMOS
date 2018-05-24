var carta = null;
var Mortos = new Array();
var Jogador= new Array();
var Oponente = new Array();
var PVCemiterio = 0;


//var pj = function(a){ Jogador.indexOf(a)};
//var po = function(a){ Oponente.indexOf(a)};

function Acao(nome){
    if(carta == null){
        Selecionar(nome);
    }else if(carta.id==nome.id){
            console.log("Voce não pode atacar a si mesmo! selecione o alvo!");
    }else if(((Oponente.indexOf(carta) != -1)&&(Oponente.indexOf(nome) != -1)) || ((Jogador.indexOf(carta) != -1)&&(Jogador.indexOf(nome)!= -1))){
        console.log("Voce não pode atacar um aliado!");
    }else{
        Atacar(nome);
    }
}


function Selecionar(nome){
    carta = nome
    console.log(nome);
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
        if(carta.pontos_de_vida < 0){
            Cemiterio(carta);
        }
        if(alvo.pontos_de_vida < 0){
            Cemiterio(alvo);
        }
        carta = null;
};


function Cemiterio(tropa){
    var img = document.getElementById(tropa.id);
    img.parentNode.removeChild(img);
    PVCemiterio += tropa.pvInical;
    if(PVCemiterio >= 300){
        console.log("Voce Perdeu");
    }
    Mortos.push(tropa);
}


function Selecionar(obj){
    if(Jogador.indexOf(obj) == -1){
        Jogador.push(obj);
    }
    console.log(Jogador);
}


function Mao(){
    for(i=0;i<Jogador.length;i++){
        var link = Jogador[i];
        document.getElementById("Jogador").innerHTML = "<img id='" + link.id + "' onclick='Acao(" + link + ")' class='cartas' src='Tropas/" + link.nome.replace(/[ ]/g , "_") + ".jpg'>"; 
    }
}

window.onload = function inicio(){



}
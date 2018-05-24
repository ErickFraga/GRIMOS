Bherk_tropa = {
    nome: 'Bherk',
    raca: 'Anão',
    classe: 'Clerigo',
    id: 'Bherk',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: true,
    armadadura: true,

    pvInical: 150,
    pontos_de_vida: 150,
    ataque: 70,
    defesa: 80,
    agilidade: 06,
    brutalidade: 13,
    //html: "<img id="BherInimigo" onclick="Acao(Bherk_tropa_Inimigo)"class="cartas" src="Tropas/Bherk.jpg">"
    Efeito: function(){

    }
}

OrfaFloresta_tropa = {
    nome: 'Orfã da Floresta',
    raca: 'Humana/Animal',
    classe: 'Druida/Fera',
    id: 'OrfaFloresta',

    corpo_a_corpo: false,
    pesadas: false,
    longo_alcance: false,
    armadadura: false,

    pvInical: 100,
    pontos_de_vida: 100,
    ataque: 20,
    defesa: 30,
    brutalidade: 04,
    agilidade: 06,
    Efeito: function(){
        OrfaFloresta_tropa.brutalidade -= 2;
        OrfaFloresta_tropa.agilidade -= 2;
        OrfaFloresta_tropa.ataque += 80;
        OrfaFloresta_tropa.defesa += 80;
    }
}

TrollSafira_tropa = {
    nome: 'Troll de Safira',
    raca: 'Troll',
    classe: 'Selvagem',
    id: 'TrollSafira',

    corpo_a_corpo: false,
    pesadas: true,
    longo_alcance: false,
    armadadura: false,

    pvInical: 120,
    pontos_de_vida: 120,
    ataque: 85,
    defesa: 90,
    agilidade: 01,
    brutalidade: 15,
    Efeito: function(){
        
    }
}

ArmaduraNobre_arma = {
    nome: 'Armadura Nobre',
    tipo: 'Brutalidade',
    modAtaque: 10,
    modAtaque: 50,
    Efeito: function(dano){
        dano-=20;
        carta.pontos_de_vida -= dano;
    }
}

LançaDruida_arma = {
    nome: 'Lança Druida',
    tipo: 'Agilidade(' + 4 + ') Brutalidade(' + 4 + ')',
    modAtaque: +10,
    modDefesa: +00,
    Efeito: function(){
        if(carta.ataque<40){
            carta.ataque *= 2;
        }
        if(carta.defesa<40){
            carta.defesa *= 2;
        }
    }
}


//                                                    <img id="BherInimigo" onclick="Acao(Bherk_tropa_Inimigo)"class="cartas" src="Tropas/Bherk.jpg">


let Bherk_tropa_Inimigo = {...Bherk_tropa};
Bherk_tropa_Inimigo.id = "BherInimigo";

/* for(kei in Bherk_tropa){
    Bherk_tropa_Inimigo[key] = Bherk_tropa[key];
}*/

let TrollSafira_tropa_Inimigo = {...TrollSafira_tropa};
TrollSafira_tropa_Inimigo.id = "TrollSafiraInimgo";

let OrfaFloresta_tropa_Inimigo = {...OrfaFloresta_tropa};
OrfaFloresta_tropa_Inimigo.id ="OrfaFlorestaInimigo";

//Jogador.push(Bherk_tropa, TrollSafira_tropa, OrfaFloresta_tropa);
//Oponente.push(Bherk_tropa_Inimigo, TrollSafira_tropa_Inimigo, OrfaFloresta_tropa_Inimigo);
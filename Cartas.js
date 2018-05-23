Berk_tropa = {
    nome: 'Berk',
    raca: 'Anão',
    classe: 'Clerigo',
    pontos_de_vida: 150,
    ataque: 70,
    defesa: 80,
    agilidade: 06,
    brutalidade: 13,
    Efeito: function(){

    }
}

OrfaFloresta_tropa = {
    nome: 'Orfã da Floresta',
    raca: 'Humana/Animal',
    classe: 'Druida/Fera',
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
    tipo: 'Agilidade(' + 4 + ')Brutalidade(' + 4,
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
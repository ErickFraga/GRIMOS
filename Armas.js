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
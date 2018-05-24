/*
NomeDaCarta_tipo = {
    nome: '',
    raca: '',
    classe: '',
    tipo: '',
    id: '',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: true,
    armadura: true,

    arma: {},

    PVInicial: ,
    pontos_de_vida: ,
    ataque: ,
    defesa: ,
    agilidade: ,
    brutalidade: ,
    Efeito: function(){

    }
}
*/


Bherk_tropa = {
    nome: 'Bherk',
    raca: 'Anão',
    classe: 'Clerigo',
    tipo: 'Tropa',
    id: 'Bherk',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: true,
    armadura: true,

    arma: {},

    PVInicial: 150,
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
    tipo: 'Tropa',
    id: 'OrfaFloresta',

    corpo_a_corpo: false,
    pesadas: false,
    longo_alcance: false,
    armadura: false,

    arma: {},

    PVInicial: 100,
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
    tipo: 'Tropa',
    id: 'TrollSafira',

    corpo_a_corpo: false,
    pesadas: true,
    longo_alcance: false,
    armadura: false,

    arma: {},

    PVInicial: 120,
    pontos_de_vida: 120,
    ataque: 85,
    defesa: 90,
    agilidade: 01,
    brutalidade: 15,
    Efeito: function(){
        
    }
}

GuardiaoDourado_tropa = {
	nome: 'Guardiao Dourado',
	raca: 'Humano',
    classe: 'Paladino',
    tipo: 'Tropa',
	id: 'GuardiaoDourado',
	
	corpo_a_corpo: true,
	pesadas: true,
	longo_alcance: false,
    armadura: true,
    
    arma: {},
	
	PVInicial: 100,
	pontos_de_vida: 100,
	ataque: 85,
	defesa: 70,
	agilidade: 06,
	brutalidade: 08,
	Efeito: function(){
		
	}
}

Lavascorpion = {
	nome: 'Lavascorpion',
	raca: 'Escorpião',
    classe: 'Elemental Fogo',
    tipo: 'Tropa',
	id: 'Lavascorpion',
	
	corpo_a_corpo: false,
	pesadas: false,
	longo_alcance: false,
    armadura: false,
    
    arma: {},
	
	PVInicial: 95,
	pontos_de_vida: 95,
	ataque: 50,
	defesa: 45,
	agilidade: 07,
	britalidade: 06,
	Efeito: function(){
		
	}
}

Fenix_tropa = {
	nome: 'Fênix',
	raca: 'Fênix',
    classe: 'Criatura Magica',
    tipo: 'Tropa',
	id: 'Fenix',
	
	corpo_a_corpo: false,
	pesadas: false,
	longo_alcance: false,
    armadura: false,
    
    arma: {},
	
    PVInicial: 50,
    pontos_de_vida: 50,
    ataque: 40,
    defesa: 40,
    agilidade: 06,
    brutalidade: 04,
    Efeito: function(){

    }
}

Morte_tropa = {
    nome: 'Morte',
    raca: 'Humanoide',
    classe: 'Mitologico',
    tipo: 'Tropa',
    id:'Morte',

    corpo_a_corpo: true,
	pesadas: false,
	longo_alcance: true,
    armadura: false,
    
    arma: {},

    PVInicial: 60,
    pontos_de_vida: 60,
    ataque: 60,
    defesa: 50,
    agilidade: 04,
    brutalidade: 05,
    Efeito: function(){

    }

}

Medusa_tropa = {
    nome: 'Medusa',
    raca: 'Humanoide',
    classe: 'Mitologico',
    tipo: 'Tropa',
    
    corpo_a_corpo: false,
	pesadas: false,
	longo_alcance:false,
    armadura: false,

    arma: {},

    PVInicial: 70,
    pontos_de_vida: 70,
    ataque: 50,
    defesa: 65,
    agilidade: 07,
    brutalidade: 03,
    Efeito: function(){

    }

}

Necroparasita_tropa = {
    nome: 'Necroparasita',
    raca: 'Besta/Humanoide',
    classe: 'Parasita',
    tipo: 'Tropa',

    corpo_a_corpo: false,
	pesadas: false,
	longo_alcance:false,
    armadura: false,

    arma: {},

    PVInicial: function(){},
    pontos_de_vida: PVInicial,
    ataque: 50,
    defesa: 50,
    agilidade: 05,
    brutalidade: 03,
    Efeito: function(){

    }
}

PaladinnoElemental_tropa = {
    nome: 'Paladino Elemental',
    raca: 'Humanoide',
    classe: 'Elemental Floresta',
    id: 'PaladinoElemental',
    tipo: 'Tropa',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: false,
    armadura: true,

    arma: {},

    PVInicial: 150,
    pontos_de_vida: 150,
    ataque: 80,
    defesa: 90,    
    agilidade: 03,
    brutalidade: 11,
    Efeito: function(){

    }
}

Parasita_tropa = {
    nome: 'Parasita',
    raca: 'Besta',
    classe: 'Parasita',
    id: 'Parasita',
    tipo: 'Tropa',

    corpo_a_corpo: null,
    pesadas: null,
    longo_alcance: null,
    armadura: null,

    arma: {},

    PVInicial: null,
    pontos_de_vida: null,
    ataque: null,
    defesa: null,
    agilidade: null,
    britalidade: null,
    Efeito: function(){

    }
}

Ragnar_tropa = {
    nome: 'Ragnar',
    raca: 'Humano',
    classe: 'Barbaro',
    tipo: 'Tropa',
    id: 'Ragnar',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: true,
    armadura: false,

    arma: {},

    PVInicial: 80,
    pontos_de_vida: 80,
    ataque: 30,
    defesa: 40,
    agilidade: 03,
    brutalidade: 05,
    Efeito: function(){

    }
}

VeteranoDeGuerra_tropa = {
    nome: 'Veterano De Guerra',
    raca: 'Humano',
    classe: 'Guerreiro',
    tipo: 'Tropa',
    id: 'VeteranoDeGuerra',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: true,
    armadura: true,

    arma: {},

    PVInicial: 80,
    pontos_de_vida: 80,
    ataque: 40,
    defesa: 30,
    agilidade: 01,
    brutalidade: 01,
    Efeito: function(){

    }
}

CapitaoFlint_tropa = {
    nome: 'Capitão Flint',
    raca: 'Humano',
    classe: 'Mitologico',
    tipo: 'Tropa',
    id: 'CapitaoFlint',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: false,
    armadura: true,

    arma: {},

    PVInicial: 80,
    pontos_de_vida: 80,
    ataque: 40,
    defesa: 25,
    agilidade: 06,
    brutalidade: 06,
    Efeito: function(){

    }
}

Cacador_tropa = {
    nome: 'Caçador',
    raca: 'Humano',
    classe: 'Normal',
    tipo: 'Tropa',
    id: 'Cacador',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: true,
    armadura: false,

    arma: {},

    PVInicial: 50,
    pontos_de_vida: 50,
    ataque: 60,
    defesa: 55,
    agilidade: 04,
    brutalidade: 06,
    Efeito: function(){

    }
}

CiclopeDeZeus_tropa = {
    nome: 'Ciclope de Zeus',
    raca: 'Besta/Humanoide',
    classe: 'Mitologico',
    tipo: 'Tropa',
    id: 'CiclopeDeZeus',

    corpo_a_corpo: true,
    pesadas: true,
    longo_alcance: false,
    armadura: false,

    arma: {},

    PVInicial: 70,
    pontos_de_vida: 70,
    ataque: 75,
    defesa: 60,
    agilidade: 02,
    brutalidade: 09,
    Efeito: function(){

    }
}

RainhaDeRapina_tropa = {
    nome: 'Rainha De Rapina',
    raca: 'Humano',
    classe: 'Normal',
    tipo: 'Tropa',
    id: 'RainhaDeRapina',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: true,
    armadura: false,

    arma: {},

    PVInicial: 70,
    pontos_de_vida: 70,
    ataque: 25,
    defesa: 30,
    agilidade: 07,
    brutalidade: 05,
    Efeito: function(){

    }
}

LordDasAves_tipo = {
    nome: 'Lord Das Aves',
    raca: 'Humano',
    classe: 'Normal',
    tipo: 'Tropa',
    id: 'LordDasAves',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: true,
    armadura: false,

    arma: {},

    PVInicial: 60,
    pontos_de_vida: 60,
    ataque: 35,
    defesa: 30,
    agilidade: 07,
    brutalidade: 05,
    Efeito: function(){

    }
}

FalcaoNegro_tropa = {
    nome: 'Falcão Negro',
    raca: 'Falcão',
    classe: 'Ave de Rapina',
    tipo: 'Tropa',
    id: 'FalcaoNegro',

    corpo_a_corpo: false,
    pesadas: false,
    longo_alcance: false,
    armadura: false,

    arma: {},

    PVInicial: 30,
    pontos_de_vida: 30,
    ataque: 30,
    defesa: 30,
    agilidade: 09,
    brutalidade: 05,
    Efeito: function(){

    }
} 

CorujaDaLua_tropa = {
    nome: 'Coruja Da Lua',
    raca: 'Coruja',
    classe: 'Ave de Rapina',
    tipo: 'Tropa',
    id: 'CorujaDaLua',

    corpo_a_corpo: false,
    pesadas: false,
    longo_alcance: false,
    armadura: false,

    arma: {},

    PVInicial: 45,
    pontos_de_vida: 45,
    ataque: 35,
    defesa: 25,
    agilidade: 06,
    brutalidade: 01,
    Efeito: function(){

    }
}

Goblin_tipo = {
    nome: 'Goblin',
    raca: 'Goblin',
    classe: 'Saqueador',
    tipo: 'Tropa',
    id: 'Goblin',

    corpo_a_corpo: true,
    pesadas: false,
    longo_alcance: true,
    armadura: false,

    arma: {},

    PVInicial: 30,
    pontos_de_vida:30 ,
    ataque: 12,
    defesa: 06,
    agilidade: 03,
    brutalidade: 01,
    Efeito: function(){

    }
}


let Bherk_tropa_Inimigo = {...Bherk_tropa};
Bherk_tropa_Inimigo.id = "BherInimigo";

let TrollSafira_tropa_Inimigo = {...TrollSafira_tropa};
TrollSafira_tropa_Inimigo.id = "TrollSafiraInimgo";

let OrfaFloresta_tropa_Inimigo = {...OrfaFloresta_tropa};
OrfaFloresta_tropa_Inimigo.id ="OrfaFlorestaInimigo";

//Jogador.push(Bherk_tropa, TrollSafira_tropa, OrfaFloresta_tropa);
//Oponente.push(Bherk_tropa_Inimigo, TrollSafira_tropa_Inimigo, OrfaFloresta_tropa_Inimigo);
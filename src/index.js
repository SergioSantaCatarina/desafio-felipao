// Definindo variáveis
let nomeHeroi = "Super Herói"
let qtdExperiencias = 9800
let nivelHeroi = ""

let faixasNivel = [
    [0,1000,"Ferro"],
    [1001,2000,"Bronze"],
    [2001,5000,"Prata"],
    [5001,7000,"Ouro"],
    [7001,8000,"Platina"],
    [8001,9000,"Ascendente"],
    [9001,10000,"Imortal"],
    [10001,99999,"Radiante"],
];

for (let i=0; i< faixasNivel.length; i++) {

    if(qtdExperiencias >= faixasNivel[i][0] && qtdExperiencias <= faixasNivel[i][1]){
        nivelHeroi = faixasNivel[i][2];
        i = 9;
    };
};

console.log("O Heroi **" + nomeHeroi + "** está no nível " + "**" + nivelHeroi + "**");

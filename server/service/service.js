const data = require('../data/dadosJogadores');

exports.getJogadores = function(){
    return data.getJogadores();
}

exports.saveJogadores = function(jogador){
    return data.saveJogadores(jogador);
}

exports.updateJogadores = function(jogador){
    return data.updateJogadores(jogador);
}

exports.deleteJogadores = function(jogador){
    return data.deleteJogadores(jogador);
}
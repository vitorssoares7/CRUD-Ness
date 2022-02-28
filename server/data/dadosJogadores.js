const database = require('../infra/database');

exports.getJogadores = function(){
    return database.query('select * from jogadores');
};

exports.saveJogadores = function(dados){
    return database.query('insert into jogadores (nome, numero, posicao) values ($1, $2, $3)', [dados.nome, dados.numero, dados.posicao]);
};

exports.updateJogadores = function(dados){
    return database.query('update jogadores set nome=$1, numero=$2, posicao=$3 where numero=$4', [dados.nome, dados.numero, dados.posicao, dados.persist]);
};

exports.deleteJogadores = function(dados){
    return database.query('delete from jogadores where numero=$1', [dados.persist]);
};
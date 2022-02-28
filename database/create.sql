create schema time;

create table time.jogador{
    nome text not null,
    numero number not null,
    posicao text foreign key
}

create table time.posicao{
    posicao text primary key
}
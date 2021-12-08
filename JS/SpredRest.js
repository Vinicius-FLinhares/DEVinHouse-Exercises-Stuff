const usuario = {
    nome : 'joana',
    sobrenome: 'carvalho',
    interesses: ['leitura','jardinagem','internet'],
    familia: {
        pai: 'claudio',
        mae: 'odete',
        irma: 'lorena'
    }
}

const string = ({nome,sobrenome,interesses: [interesses],familia: {mae}})=>{
    return `ola meu nome é ${nome} ${sobrenome} e meu principal hobbie é ${interesses}. Minha mãe é a ${mae}.`
}

console.log(string(usuario));
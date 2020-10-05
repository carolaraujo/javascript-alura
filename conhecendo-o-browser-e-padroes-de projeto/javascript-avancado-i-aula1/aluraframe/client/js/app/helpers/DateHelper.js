class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd') //expressão regular para formatar datas 
       return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}

//  EXPLICANDO EXPRESSÕES REGULARES
// let codigo = 'GWZ-JJ-12';

// function validaCodigo(codigo) {

//     if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
//           alert('Código válido!');
//       } else {
//           alert('Código inválido');
//       }

// }

// validaCodigo('GWZ-JJ-12'); // válido
// validaCodigo('1X1-JJ-12'); // inválido
// function validaCodigo(codigo) {
    // cria a expressão regular. Poderíamos ter usado
    // a sintaxe new RegExp(\D{3}-\D{2}-\D{2}/)
    // \D é qualquer coisa não dígito
    // \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres
    // \d é qualquer dígito.
    // let expressao = /\D{3}-\D{2}-\D{2}/;
    //toda expressão regular possui método o método test
    // que recebe o alvo do teste, retornando true
    // se passou, e false se falhou
//     if(expressao.test(codigo)) {
//         alert('Código válido!');
//     } else {
//         alert('Código inválido!');
//     }
// }

// validaCodigo('GWZ-JJ-12'); // válido
// validaCodigo('1X1-JJ-12'); // inválido

// Exemplo prático de módulos
// Calculadora

function soma(a,b){ // Cria a função soma
    return a+b; // Retorna o resultado da função
}

function sub(a,b){ // Cria a função subtração
    return a-b; // Retorna o resultado da função
}

function mult(a,b){ // Cria a função multiplicação
    return a*b; // Retorna o resultado da função
}

function div(a,b){ // Cria a função divisão
    return a/b; // Retorna o resultado da função
}

module.exports = { // Exportando multiplas funções
    soma, 
    sub, 
    mult, 
    div,
}
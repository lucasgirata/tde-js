function soma(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function mult(a, b){
    return a * b
}

function div(a, b){
    return a / b
}

console.log("Soma: ", soma(8, 4))
console.log("Subtração: ", sub(10, 5))
console.log("Multiplicação: ", mult(2, 6))
console.log("Divisão: ", div(16, 2))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = function (array) {
    return array.filter(num => num % 2 === 0);
};

const calcularMedia = (array) => {
    const soma = array.reduce((acc, valor) => acc + valor, 0);
    return soma / array.length;
};

console.log("Números: ", numeros)
console.log("A média dos números acima é: ", calcularMedia(numeros));

function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const callback = executarOperacao(10, 5, (x, y) => x + y);

console.log("Resultado do callback (soma):", callback);
console.log("Resultado do callback (multiplicação):", executarOperacao(4, 3, mult));
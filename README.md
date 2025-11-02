# Documentação TDE 1 #

**Objetivo:** O objetivo desta atividade é aplicar conceitos fundamentais de JavaScript, com foco no uso e na diferenciação entre funções nomeadas, funções anônimas, arrow functions e callbacks. 
O projeto demonstra, de forma prática, como essas funções podem ser utilizadas para realizar operações matemáticas básicas e manipulação de dados em arrays, dois conceitos muito comuns no desenvolvimento de aplicações reais.

**Funções nomeadas (soma, sub, mult, div)** - As funções nomeadas foram criadas para realizar as quatro operações matemáticas básicas — soma, subtração, multiplicação e divisão.
Cada função recebe dois valores numéricos como parâmetros e retorna o resultado da operação correspondente.
Essas funções demonstram o uso tradicional de declaração nomeada, que permite chamar as funções em qualquer parte do código, mesmo antes de sua definição, devido ao comportamento de hoisting do JavaScript.

**Função anônima (numerosPares)** - A função anônima é atribuída a uma constante e não possui nome próprio.
Neste caso, ela é utilizada para filtrar números pares de um array, removendo todos os valores ímpares.
A função demonstra o uso de funções de alta ordem (como filter()), que aplicam uma condição sobre os elementos de um array e retornam um novo array com os valores que atendem ao critério especificado.

**Arrow function (calcularMedia)** - A arrow function calcularMedia utiliza uma sintaxe mais moderna e simplificada, introduzida no ES6, para realizar o cálculo da média dos números contidos em um array.
Ela percorre o array somando todos os elementos com o método reduce() e, em seguida, divide o total pela quantidade de itens, retornando a média.
O uso de arrow functions torna o código mais limpo e reduzido, além de eliminar a necessidade da palavra-chave function.

**Função callback (executarOperacao)** - A função callback é uma função passada como parâmetro para outra função.
Na aplicação, executarOperacao recebe dois valores e uma função como argumentos. Essa função recebida define qual operação matemática será executada.
Dessa forma, executarOperacao é genérica e pode ser reutilizada com qualquer operação matemática ou lógica que siga o mesmo formato de parâmetros

**Execução:** O código pode ser executado em qualquer terminal, navegador ou ambiente que suporte JavaScript (como o Node.js ou o console do navegador).
Os resultados das operações e manipulações de dados são exibidos diretamente no console, permitindo fácil visualização e testes das funções implementadas.

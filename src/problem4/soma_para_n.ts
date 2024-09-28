// meus comentário são em português para eu me localizar mas estou deixando sempre a tradução para inglês
// my comments are in portuguese to help me locate myself on my code, but i'm translating everything to english

function sum_to_n_a(n: number): number {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}
/* 
    sum_to_n_a:

    Está função utiliza um laço de repetição for, podendo ser feita com while ou do-while 
    de maneira que seriam mais complexas, o laço percorre todos os números de 1 até n, onde a cada
    iteração, o valor de 'i' é somado para a variável 'soma'. É fácil de ser feito, porém, quando 
    utilizado em larga escala pode apresentar gargalos no carregamento, pois precisa percorrer cada 
    número até n, o que pode tornar a aplicação pesada.
    ****
    This function uses a for loop, which could also be done with while or do-while loops, though they 
    would be more complex. The loop iterates through all numbers from 1 to n, where in each iteration, 
    the value of 'i' is added to the variable 'soma'. It's easy to implement, but when used on a large scale, 
    it may cause performance issues, since it has to iterate through each number up to n, which could 
    make the application slow.
*/

function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
/*
    sum_to_n_b:

    Essa função é a mais rápida de executar, pois utiliza a fóruma matemática de Gauss, que eu devo confessar
    que, embora tenha aprendido sobre ela na faculdade, não sabia da existência dela em TypeScript/JavaScript.
    ela é mais rápida em tempos de execução pois ao invés de iterar sobre cada número individualmente, ela
    calcula diretamente a soma de todos os números até N, independente do valor de N, ela basicamente multipla
    N pelo próximo número e divide por 2, retornando o resultado.
    ****
    This function is the fastest to execute because it uses Gauss's mathematical formula, which I must confess,
    although I learned about it in college, I didn't know it existed in TypeScript/JavaScript. It is faster in
    execution time because instead of iterating over each number individually, it directly calculates the sum 
    of all numbers up to N, regardless of the value of N. It essentially multiplies N by the next number and 
    divides by 2, returning the result.
*/

function sum_to_n_c(n: number): number {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);
}
/*
    sum_to_n_c:

    Essa função foi feita originalmente usando recursividade, mas optei por mudar para um array por achar
    mais funcinal, essa função é simples: ela cria um array com todos os números de 1 até N e utiliza o método
    'reduce' para percorrer o array somando os números, é uma função que tem um tempo de execução que pode 
    ser alto, pois depende da quantidade de números até N que tem de ser percorridos, porém é funcional
    ****
    This function was originally created using recursion, but I opted to switch to an array because I found it 
    more functional. This function is simple: it creates an array with all the numbers from 1 to N and uses 
    the reduce method to iterate over the array, summing the numbers. It has a potentially high execution time,
    as it depends on the number of elements up to N that need to be processed, but it is functional.
*/



// Testando as funções / testing the functions
console.log("sum_to_n_a(25):", sum_to_n_a(25)); // Saída tem que ser: 325 / exit needs to be: 325
console.log("sum_to_n_b(1050):", sum_to_n_b(1050)); // Saída tem que ser: 551775 / exit needs to be: 551775
console.log("sum_to_n_c(170):", sum_to_n_c(170)); // Saída tem que ser: 14535 / exit needs to be: 14535
//1)Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a
// sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const numeroUsuario = parseInt(prompt("Informe um número: "), 10);

function fibonacci(num) {
  let a = 0,
    b = 1,
    temp;

  if (num === 0 || num === 1) {
    return `${num} pertence à sequência de Fibonacci.`;
  }

  while (b <= num) {
    if (b === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    temp = a + b;
    a = b;
    b = temp;
  }

  return `${num} não pertence à sequência de Fibonacci.`;
}

console.log(fibonacci(numeroUsuario));

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
// faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoMensal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];

function calcularEstatisticasFaturamento(faturamentoMensal) {
  const faturamentosValidos = faturamentoMensal
    .filter((dia) => dia.valor > 0)
    .map((dia) => dia.valor);

  const menorFaturamento = Math.min(...faturamentosValidos);
  const maiorFaturamento = Math.max(...faturamentosValidos);
  const somaFaturamento = faturamentosValidos.reduce(
    (acc, valor) => acc + valor,
    0
  );
  const mediaFaturamento = somaFaturamento / faturamentosValidos.length;

  const diasAcimaMedia = faturamentosValidos.filter(
    (valor) => valor > mediaFaturamento
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    mediaFaturamento,
    diasAcimaMedia,
  };
}

const resultado = calcularEstatisticasFaturamento(faturamentoMensal);
console.log(
  `Menor valor de faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`
);
console.log(
  `Maior valor de faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`
);
console.log(
  `Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`
);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de
// representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamento) {
  const valorTotal = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuais = {};
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / valorTotal) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }

  return { percentuais, valorTotal };
}

const resultado2 = calcularPercentuais(faturamento);

console.log("Percentual de representação por estado:");
for (const estado in resultado2.percentuais) {
  console.log(`${estado}: ${resultado2.percentuais[estado]}%`);
}

console.log(`\nFaturamento total: R$ ${resultado2.valorTotal.toFixed(2)}`);

// 5) Escreva um programa que inverta os caracteres de um string.

const stringUsuario = prompt("Informe uma string para inverter:");

function inverterString(str) {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

console.log(`String original: ${stringUsuario}`);
console.log(`String invertida: ${inverterString(stringUsuario)}`);

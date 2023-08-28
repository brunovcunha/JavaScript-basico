// length: Propriedade de string que retorna o número de caracteres em uma string.
var textoLength = "Olá, mundo!".length;

// slice(start, end): Extrai uma parte de uma string com base em índices de início e fim.
var sliceResult = "Olá, mundo!".slice(0, 3);

// substring(start, end): Extrai uma parte da string com base em índices de início e fim.
var substringResult = "Olá, mundo!".substring(4, 9);

// substr(start, length): Extrai uma parte da string com base em um índice de início e comprimento.
var substrResult = "Olá, mundo!".substr(4, 5);

// replace(search, replace): Substitui a primeira ocorrência de uma substring por outra.
var replaceResult = "Olá, mundo!".replace("mundo", "amigo");

// toUpperCase(): Converte todos os caracteres para maiúsculas.
var uppercaseResult = "Olá, mundo!".toUpperCase();

// toLowerCase(): Converte todos os caracteres para minúsculas.
var lowercaseResult = "Olá, mundo!".toLowerCase();

// concat(...strings): Une duas ou mais strings.
var concatResult = "Olá".concat(", ", "mundo!");

// trim(): Remove espaços em branco no início e no final da string.
var trimResult = "   Olá, mundo!   ".trim();

// charAt(index): Retorna o caractere na posição especificada pelo índice.
var charAtResult = "Olá".charAt(1);

// charCodeAt(index): Retorna o valor Unicode do caractere na posição especificada pelo índice.
var charCodeAtResult = "Olá".charCodeAt(1);

// split(separator): Divide uma string em um array de substrings com base em um separador.
var splitResult = "Olá, mundo!".split(", ");

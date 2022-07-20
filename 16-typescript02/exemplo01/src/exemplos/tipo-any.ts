let valorAny: any;
valorAny = 3;
valorAny = "olá";
valorAny = true;

let valorString1: string = "teste";
valorString1 = valorAny;

let valorString2: string = "textão";


function somarStrings(str1: string, str2: string) {
  console.log(str1 + str2);
}

somarStrings(valorString1, valorString2);
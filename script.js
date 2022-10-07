//Nullish coalescing operator (??) SEMELHANTE AO ((||) = 'OU')
const foo = null ?? "default string";
// document.body.innerText = foo;
// expected output: "default string"

const baz = 0 ?? 42;
// document.body.innerText = baz;
// expected output: 0

//================================================================

//Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

//================================================================

// Desestruturação
let a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });

//================================================================

// Rest operation
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

//================================================================

// Optional chaining (?.)
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

const test = {
  nome: "nome",
  idade: 29,
  t: {
    te: {
      tee: "idade",
      tee2: "idade2",
    },
    te2: function showTheT() {
      return "ok";
    },
  },
};

/*
Optional chaining (?.)
document.body.innerText = test ? (t ? te : "deu") : "não informado";
document.body.innerText = test.t?.te?.tee ?? "não informado";
document.body.innerText = test.t?.showTheT?.() ?? "não informado";
*/

//================================================================

//Metodos de array
//for, foreEach, map, filter, every, some, find, findIndex, reduce

const array = [1, 2, 3, 4, 5];
/*
for ------
for (let i of array) {
  document.body.innerText += i;
}

forEach ------
array.forEach((item) => {
  document.body.innerText += item;
});

alternativo map com forEach
const newArray =  [];
array.forEach(item)=>{
  newArray.push(item * 2)
}

map ------ sempre terá o mesmo tamanho do array de origem,
só será utilizado "map" para tranformar array de origem em outra informação apartir dele mesmo.
const newArray = array.map((item) => {
  return item * 2;
  const newArray = array.map((item) => {
    if(item % 2 === 0 ){
      return item * 10
    }
  return item;
});

filter ------ filtra uma array conforme sua função especifica
const newArray = array.filter((item) => item % 2 === 0);

every ------ retorna true ou false = true se todos os item forem verdadeiros = false se pelomenos um for falso
const newArray = array.every((item) => typeof item === "number");

const newArray = array.every((item) => {
  return typeof item === "number";
});

some ------ retorna true ou false = false se pelomenos os item forem verdadeiros = true se todos for falso
const newArray = array.some((item) => {
  return typeof item !== "number";
});

find ------ mostra o primeiro item com satisfaz as/a condições caso contrario o valor sera "undefoned"

findIndex ------ mostra o indice do primeiro item com satisfaz as/a condições caso contrario o valor sera "undefoned"
const newArray = array.findIndex((item) => item % 2 === 0);


reduce ------ reduce é utilizado qua se deseja criar algo novo com o array
const newArray = array.reduce((accumulator,item) =>{
  document.body.innerText +=  accumulator + ',' + item + '---';
  return accumulator + item; 
},0); segundo valor pode ser {},[]
O VALOR FINAL ESTÁ DENTRO DO newArray

JUNTAR METODOS ------
const newArray = array
  .filter((item) => item % 2 === 0)
  .map((item) => item * 10);
*/

//================================================================

// Templates Literals
const nome = "Maycon";
/*
const bemVindo = `Bem vindo ${nome}`;
const bemVindo = `Bem vindo ${nome ? nome: 'Visitante' }`;
*/
const bemVindo = `Bem vindo ${nome ?? "Visitante"}`;

//================================================================

// Promises
/*

.then / .catch
const soma = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(a + b);
      reject(a + b);
    }, 2000);
  });
};
soma(1, 2)
  .then((somaNumeros) => {
    document.body.innerText = somaNumeros;
  })
  .catch((err) => {
    console.log(err);
  });
  
 
fetch("https://api.github.com/users/diego3g")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  // .then((response) => {
  //   response.text().then((body) => {
  //     console.log(body);
  //   });
  // })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("deu certo");
  });

   */
async function buscaDados() {
  try {
    const response = await fetch("https://api.github.com/users/diego3g");
    const body = await response.json();
    return body.name;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("deu certo");
  }
}
buscaDados().then((name) => {
  console.log(name);
});
//================================================================

//================================================================
// document.body.innerText = JSON.stringify(soma());

console

//tipos de dados

const name = "Felipe Teles Medina"
let qtd =5
const isAproved = false
let lastNamee = null
let age
const languages = ["javaScript", "PHP", "Python"];
const user = {email: "lcs@teste.com", passoword: "teste123"};


console.log(name);
console.log(qtd);
console.log(isAproved);
console.log(lastNamee);
console.log(age);
console.log(languages);
console.log(user);

let obj =[
{nome: "Felipe", age: 25},
{nome: "Matheus",age: 30},
{nome: "luciana",age: 20},
{nome: "medina", age: 14},

]

let num = [1,2,3,4,5]



console.log(obj, num);



//método de string é algo que posso fazer a partir de uma variavel. pesquisar sobre ESLINT/ Prettier

const fullName ="FelipexTelesxMedina"

console.log(fullName, "nome completo");

const stringToArray = fullName.split("x")

console.log(stringToArray);

const primeiroNome = stringToArray[0]
const ultimoNome = stringToArray [2]

console.log( "Bem vindo",primeiroNome,ultimoNome);

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.length)
console.log(fullName.indexOf("Medina"))
console.log(fullName.slice(0,6))



//métodos de array

const list = ['a','b','c',]

console.log(list.length, 'array')
console.log(list[0])
list[3] ="f"
console.log(list)

list.push('g')

console.log(list,"push")

console.log(list[list.length-1], "aqui")

list.pop()
console.log (list)
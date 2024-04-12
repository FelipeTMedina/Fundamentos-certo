console

//tipos de dados

const name = "Felipe Teles Medina"
let qtd =5
const isAproved = false
let lastNamee = null
let age
const languages = ["javaScript", "PHP", "Python"];
const user = {email: "lcs@teste.com", passoword: "teste123"};


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
//remove o ultimo elemento da Array

list.pop()
console.log (list)

//remove o primeiro item de uma array
list.shift
console.log(list)

// o ultimo se torna o primeiro
list.unshift()
console.log(list, 'unshift');

//start do slice = valor do lenght anterior
//end = valor do real

console.log(list.slice (2,3))

//objetos

const product = {
    namess: "regata",
    price: 49.33,
    inStock: true,
    sizes: ['p','m','g'],


}

console.log(product.namess);
console.log(product.price);
console.log(product.inStock);
console.log(product.sizes);

product.color ="blue"
 console.log(product);

 //destructuing



const { price, sizes} = product

console.log(price,sizes);

//json
const dog ={
nomess: 'mel',
age: 7,
breed: 'caramelo',
}

//transforma o arquivo em json
const jasonp = JSON.stringify(dog)
const jasoNST = JSON.parse(jasonp)

console.log(jasonp)
console.log(jasoNST)

 const caqui = 11.6443
 console.log(caqui.toFixed(1))


 const data =new date ()
 console.log(data);


 //operadores

 const a= 10
 const b = 15

 //aritimeticos

 const soma = a + b
 const subt = a -b
 const div = a / b
 const mult = a *b
 const rest = a % b


 //incremento decremento



 
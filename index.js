// const A = {
//     a: 324,
//     b: 'salam'
// }
// const copyA = A
// copyA.a = 123
// console.log(A.a)




// **********************
// COPY OF Object
// ***********************


// const person = {
//     name : 'John',
//     age : 30,
//     city : {
//         name : 'New York',
//         population : 8000000
//     }
// }

// const personCopy = Object.assign({}, person)
// personCopy.name= 'Farid'
// console.log(person.name) // John
// console.log(personCopy.name) // Farid
// personCopy.city.name = 'Los Angeles'
// console.log(person.city.name) // Los Angeles
// console.log(personCopy.city.name) // Los Angeles


// ************ заметка object.assign() ************
// Object.assign() создает поверхностную копию объекта, что означает, что если объект 
// содержит вложенные объекты, то эти вложенные объекты не будут скопированы, а будут
//  ссылаться на те же объекты в памяти. Поэтому изменения в вложенных объектах будут отражаться
//  в обоих объектах.



// // VARIANT 2

// const person = {
//     name : 'John',
//     age : 30,
// }

// const person2 = {...person}
// console.log(person2.name)
// console.log(person.name);

// // variant 3
// const person3 = JSON.parse(JSON.stringify(person))
// console.log(person3.name)
// console.log(person.name);
// // sperva delayem stringify, potom parse, eto delayet glubokuyu kopiyu obyekta, i ne soxranyayet takje i vlojenniye obekty, kak object.assign() i spread operator. No eto ne rabotaet esli v obyekte est funkcii ili simboly, tak kak oni ne mogut byt serializovany v JSON.




// function one(){
// console.log('John')
// }
// console.log("start");

// setTimeout(one, 5000)


// const button = {
//     name: 'John',
//     width : 100,
//     height : 50,
// }
// const button3 = {
//     ...button,
//     color : 'red',
// } 
// console.log(button3) + color
// console.log(button);

// function umnojenie(a, b=1){
//     return a * b
// }
// console.log(umnojenie(5,2));===> 5*2=10
// console.log(umnojenie(5));====> 5*1=5

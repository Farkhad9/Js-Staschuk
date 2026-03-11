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


// const newfn = (c,d=3)=>
// {
//     return c - d
// }
// console.log(newfn(10,5)); // 10-5=5
// console.log(newfn(10)); // 10-3=7


// const newPost = (post, addedAt= Date()) => ({
//     ...post,
//     addedAt
// })
// const fdPost = {
//     id: 1,
//     name: 'My first post',
// }
// console.log(newPost(fdPost));


// const erfunction = ()=>{
//     throw new Error('This is an error')
// }
// try{ erfunction()}
// catch(error){
//     console.log(error.message)
// }
// console.log('continue')

const newArray = [1,2,3,4,5]
newArray.forEach(el => console.log(el*2))
console.log(newArray);


const secondArray = newArray.map(el => el*2)
console.log(secondArray);

// map metodu yeni bir array qaytarir foreach ise
//  sadece * icra eliyir ve array qaytarir yeni ki foreachin
//  qabagina 3 cu array = foreach yazmaq olmaz error verir
//  mapda ise olar vee map ve foreach ikside esas olan arrayi deyismir

// const userProfile = {
//     name : 'John',
//     commentsQuantity : 30,
//     city : 'New York'
// }

// const {name, commentsQuantity} = userProfile
// const {city} = userProfile
// console.log(commentsQuantity); // 30
// console.log(city); // New York




// const fruits = ['apple', 'banana', 'grape']
// const [firstFruit, secondFruit, thirdFruit] = fruits
// console.log(firstFruit); // apple
// console.log(secondFruit); // banana
// console.log(thirdFruit); // grape


const userProfile = {
    name : 'John',
    commentsQuantity : 30,
}
const userInfo = ({name, commentsQuantity})=> {
    if (!commentsQuantity){
        return `User ${name} has no comments`
    } 
    else {
        return `User ${name} has ${commentsQuantity} comments`
    }
}
userInfo(userProfile) // User John has 30 comments
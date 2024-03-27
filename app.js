// // alert("hi"); 
// const a = 6;
// const b = 3;
// // const myName = "Sumin";
// let myName = "Sumin";


// console.log("lalala");
// console.log(a - 2);
// console.log(a * 2);
// console.log(b * 2);
// console.log("Hello " + myName);

// myName = "Kim Sumin";
// console.log("My full name is " + myName);

// 2.5 ~ 2.6 arrays and objects

//  const mon = "mon";
//  const tue = "tue";
//  const wed = "wed";
//  const thu = "thu";
//  const fri = "fri";
//  const sat = "sat";
//  const sun = "sun";

//  const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];
//  //get item from array
//  console.log(daysOfWeek[0]);
// // add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//설명이 필요하지 않은 데이터 리스트들은 array로, 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

// const player = {
//     name : "sumin",
//     points : 10,
//     fat: true,
// };
// console.log(player);
// player.lastName = "potato";
// player.points = 15;
// console.log(player);


// 2.7 Function part 1,2

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("sumin", 10);
// sayHello("soo", 20);
// sayHello("lyn", 30);

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }

// function divide(a, b){
//     console.log(a / b);
// }
// plus(8, 29);
// divide(98,20);

const player = {
    name : "sumin",
    sayHello : function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lyn");
player.sayHello("soo");

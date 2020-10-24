// let calculator = {
//   result: 0,
//   init: function (num) {
//     this.result = num;
//     return this;
//   },
//   add: function (num) {
//     this.result += num;
//     return this;
//   },
//   mul: function (num) {
//     this.result *= num;
//     return this;
//   },
//   div: function (num) {
//     this.result /= num;
//     return this;
//   }
// }

// let test = calculator.init(2).add(2).add(4).result;
// let test1 = test;
// let test2 = test1;
// let test3 = test2;
// console.log(test3);
// =
// let test = calculator
//   .init(2)
//   .add(2)
//   .add(4).result;
//
// console.log(test);
// class man{
//   constructor(name,age) {
//     this.name=name;
//     this.age=age;
//   }
// }
// let test=new man('Peter',35);
// console.log(test);
// function get () {
//   console.log(this.name)
// }
// get.bind(man);
// test.get()
//
// let test2={};
// test2.name="Ivan";
// test2.age=34;
// let x = new test();
// console.log(x.name);
// console.log(x.age);

function Calculator () {
  this.result = 0;

  this.init = function (num) {
    this.result = num;
    return this;
  };
  this.add = function (num) {
    this.result += num;
    return this;
  };
  this.mul = function (num) {
    this.result *= num;
    return this;
  };
  this.div = function (num) {
    this.result /= num;
    return this;
  };
  this.sub = function (num) {
    this.result -= num;
    return this;
  };
    // this.alert = () => setTimeout(() => alert(this.result), 1000);
  setTimeout(()=>{alert.call(this)},2000)


}


let human={
  name:'ivan',
  age:25,
  show(){
    console.log(`${this.name} ${this.age}`)
  }
}
function show(){
  console.log(`${this.name} ${this.age}`)
}
let armen={
  name:'Armen',
  age:36
}
show.call(armen);

human.show.apply(armen);
class man{
  constructor(name,age) {
    this.name=name,
      this.age=age
  }
}
class admin extends man{
  constructor(name,age,position) {
    super(name,age);
    this.position=position
  }
}

let ar=[
  new man('Igot',25),
  new man('Igot',25),
  new man('Igot',25),
  new admin('Vadim',45,'admin')
]
console.log(ar)
let woman={

}

console.log(woman)

// Calculator.prototype.show=function (){
//    setTimeout(()=>{alert(this.result)},2000)
// }

const calc = new Calculator();

console.log(
  calc
    .init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2).result// 1
);
calc.alert();
Q
// let user = {
//   name: "Джон",
//   age: 30,
//
//   sayHi() {
//     alert( this.name ); // приведёт к ошибке
//   }
//
// };
//
//
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
//
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
//
// let x = 0.1;
// x+=0.2
//
// alert(x)



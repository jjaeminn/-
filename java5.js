const nums = [3,10,1,6,4];
//const minNum = Math.min(...nums);
//const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3,10,1,6,4]) 
const maxNum = Math.max.call(null, ...nums);
// = Math.max.apply(null,3,10,1,6,4)

console.log(minNum);
console.log(maxNum);


const user = {
  name: "Mike",
  showName: function(){
    console.log(`hello, ${this.name}`);
    
  },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();

// bind: 함수의 this값을 영구히 바꿀 수 있습니다.


//const car = {
 // wheels: 4,
  //drive() {
   // console.log("drive..");
 // },

 const Bmw = function(color) { // 색깔 지정해주는 함수 
    this.color = color;
    
  };
  
  Bmw.prototype.wheels = 4; // Bmw 상속 바퀴 = 4개 
  Bmw.prototype.drive = function () {
  console.log("drive..");
  };
  
  const X5 = new Bmw("orange");
  const Z4 = new Bmw("purple");
  //이렇게 묶어서 사용하면 값은 나오긴 하지만 constructor가 나오지 않으므로 하나씩 추가해 하는 게 좋다.
  //Bmw.prototype = {
   // wheels =4
   // drive() { 
   // console.log("drive..");},      
   //   navigation: 1,
    //    stop() {
   //     console.log("STOP");
   //   },
  //};
  
  //X5.__proto__ = car;
  //Z4.__proto__ = car;
  
  
  // instanceof -> 무엇으로 만들어졌는지 check하는 것 
  
  // Z4 instanceof Bmw = true 



  const User = function (name, age) { 
    this.name = name;
    this.age = age;
    this.showName = function() {
      console.log(this.name);
    };
  };
  
  const mike = new User("Mike" , 30);
  //class 형태 


  //class 상속 = extends

class Car { 
    constructor(color) {
      this.color = color;
      this.wheels = 4;
      
    }
      drive() {
        console.log("drive..");
        
      }
      stop() {
      console.log("STOP!");
      }
  }
  
  
  //extends의 경우 빈 객체 만듬 -> this 할당 작업울 건너 뛰기 떄문에 super(); 로 객체를 할당 시켜 줘야되고
  class Bmw extends Car { // Car -> Bmw로 상속 
    constructor(color) {  // 동일한 인수를 받도록 color추가
      super(color);
      this.navigation = 1;
    }
    park(){
      console.log("PARK");
      
    }
    stop() { 
      console.log("off")};
  }
  
  const z4 = new Bmw("blue");
  
  
  //상속할때는 무조건 자식생성자들이 부모 생성자들을 호줄 해야한다.( 기본원리)
  //super();  부모 클래스로부터 상속받은 필드나 메소드를 //자식 클래스에서 참조하는 데 사용하는 참조 변수입니다.
  // 그 다음 인수가 같아야 하기 때문에 인수도 똑같이 넘겨주기

  // promise 

// 기본 툴:const pr = new Promise((성공, 실패)=> {
//});


const pr = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('OK')
  },1000)
             });

console.log(pr);

const hr = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject(new Error('error..'))
  },1000)
             });


console.log(hr);

pr.then(
    function(result){}, // then은 함수가 실행 됬을떄의 실행되는 함수를 지정할 수 있다. 
    function(err){} 
);

// pr.then(
//    function(result){} 이렇게 나타낼 수 있음 
//).catch(
//    function(err){} 이게 더 좋다.(확실함)
//).fi

const fd = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve("OK");
    },1000)
});

console.log("시작");
fd.then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
}).finally(()=> {
  console.log("끝");}
        )




//promise chaining 이런 식임 
f1().then((res)=> f2(res))
  .then(res)=> f3(res))
  .then(res)=> console.log(res))
  .catch(console.log)
  
  
function User(name, age, ...skills) { 
    this.name = name;
    this.age = age;
    this.skills = skills;
}


const user1 = new User("Mike", 30 , 'html', 'css');
const user2 = new User("Tom", 20 , 'js', 'React'); 

console.log(user1);

//******
//전개 구문 
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1,...arr2,7,8,9];

console.log(result);

arr1 = [...arr2, ...arr1];

console.log(arr1);
  

let user = { name: "james"};
let info = {age: 30};
let fe = ["Js", "React"];
let lang = ["Korean", "English"];

//user = Object.assign({},userinfo,{skills : []});

//fe.forEach((item)=> {
//  user.skills.push(item);
//});

//lang.forEach((item)=> {
 // user.skills.push(item)
//});

user = {
  ...user,
  ...info,
  skills : [...fe,...lang],
};

console.log(user);


//**********************
//Closure : 함수와 렉시컬 환경(어휘적 환경)의 조합, 함수가 생성될 당시의 외부 변수를 기억 생성 이후에도 계속 접근 가능  

//내부에서 변수를 찾고 없으면 전역으로 범위를 확장해 찾는다. 


function makeAdder(x) { 
    return function(y){
      return x + y;
    }}


const add3 = makeAdder(3);// return function(y){
//return 3+y;} 로 반환 

//console.log(add3(2)); // y에 값 놓기 



//setTimeout : 일정 시간이 지난 후 함수를 실행 
//setinterval : 일정 주기 마다 함수 실행 

//function fn (name){
// console.log(3)};

//setTimeout(fn, 3000,"james"); // (함수, 시간( 3000 = 3s), '인수')


//******************
//call : 오픈 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다. 

const mike = {name: "Mike" };

const tom = {name: "tom"};

function showThisName() {
console.log(this.name);}


showThisName();// this 가 window를 가리키기 때문에 안나옴 

showThisName.call(mike);// call로 객체 전달 
//apply:함수 메개변수 처리 제외하고 call 과 같다.
//매개변수를 배열로 받는다,

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
  
}

update.apply(mike, [1999,"singer"]);
console.log(mike);


let num = 0;

function showTime() {
console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
}

setInterval(showTime, 1000);





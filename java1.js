//1.hoisting: 변수를 가장 위로 올려 준다. 
// 만약 console.log(name);  name = "Mike"; 라고 하면 
//       var = name;  console.log(name); name = "Mike"; 로 자동으로 바뀐다. //

// 변수 생성과정: 선언 -> 초기화 -> 할당 순이다.  
// var = 선언 및 초기화 단계( 초기화 : undefined 를 할당 해주는 단계)
// let = 선언 -> 초기화 -> 할당 나누어서 진행 
// const = 선언 + 초기화 + 할당 같이 진행 

// var = 함수 스코프: 외부에서도 변수사용가능(전역변수) 
// const,let: 함수 내부에서만 사용가능 (지역변수)

 //2. function User(name,age) {   생성원리: 함수 -> this라는 빈 객체 생성  
                               //-> property 생성 
    //this = {}  원래없음 
     // this.name = name;       
     // this.age = age;
    //return this;  원래 없음 
  // }

  function item(name, price) {
    this.name = name;
    this.price = price;
    this.showPrice = function () {
      console.log(`가격은 ${price}원 입니다.`);
    };
    
  }
    
  const item1 = new item("수박", 10000);
  console.log(item1)
  item1.showPrice();
  
  // let a = age;  [a] = 30 이라해도 됨 <- computed property
  
  //객체를 복제하고 싶으면 const newUser = Object.assign({}, user); 
   //                   {} <- 빈 객체안에 user가 들간다. 
  
  const user = { 
  name: "Mike", age: 30,};
  
  const user2 = Object.assign({}, user);
  user2.name = "Tom"
  console.log(user);
  console.log(user2);

  const adduser= Symbol("adduser");
  user[adduser] = function () {
    console.log(this.name);
  };

  user[addname]

  

  //symbol을 통하여 다른 코드에 영향을 미치지 않고 method 추가 가능 
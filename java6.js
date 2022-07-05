// async: promise로 간주할 수 있다. 
 async function getName() {
      return Promise.res("Tom");
}


getName().then((name) => {
    console.log(name);
});

async function showName(){
  const result = await getName('Mike');
  console.log(result);
}

console.log("시작");
showName();



//저번의 then으로 잇는코드 

//가독성이 더 좋다. 

console.log("시작");
async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
  console.log("종료");
}

order();



//Generator: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능 /반복가능 

// yield 부분에서 멈출 수 있다. 

function* fn() {
    try{
    console.log(1)
    yield 1;
    console.log(2)
    yield 2; 
    console.log(3)
    console.log(4)
    yield 3;
    return "finish";
  } catch (e) {
    console.log(e);
  }
  }
  
  const a = fn();
  
             
              const arr = [1,2,3,4,5];
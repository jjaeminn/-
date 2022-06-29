//hoisting: 변수를 가장 위로 올려 준다. 
// 만약 console.log(name);  name = "Mike"; 라고 하면 
//       var = name;  console.log(name); name = "Mike"; 로 자동으로 바뀐다. //
//let age = 30;
//function showAge() { 
//console.log(age)
  
  
//}

//showAge();
  

// Math.floor(Math.random()*100) + 1  // 1~100까지의 숫자 나열 
//math.random-> 0~1 사이의 수 반환 
//floor-> 소수점 없애줌  뒤의 +1은 0이 나왔을때를 대비

//값이 없으면 -1을 반환한다. 


//let decs = " Hi my name is james";

//if (decs.indexOf('Hi') > -1) { 
    //  console.log("Hi가 포함된 문장입니다.");
//}// 이렇게 쓰면 decs.indexO('Hi')는 0이므로 if문에서는 0이 false 이므로 뒤에 >-1 을 붙여야 식이 작동한다.

//let desc = 'abcdefg';

//console.log(desc.slice(0,5));//adcde
//console.log(desc.slice(2)); //cdefg
//console.log(desc.substring(5,3)); // 3~5의 범위 출력 "de"      (3,5) = (5,3)

//console.log(desc.substr(0,4)) // 0부터 문자를 4개 가져온다 "adcd"

// desc.trim -> 공백제거 


//let list = [ 
//"01. 들어가며",
//"02. Js의 역사", //list 생성 
//"03. 자료형",
//"04. 함수",
//"05. 배열",
//];

//newlist = [];  // 빈list 생성 

//for(let i = 0; i < list.length;i++){  // newlist안에 나열 되도록 for을 이용한 반복문 만들고 
  
 // newlist.push(list[i].slice(4)); // list[i] = 문자열 전체 -> 4에서부터 뒤까지 짜름 
//}

//console.log(newlist)


//function hasCola(str) { 
//  if (str.indexOf("콜라")> -1 ){ // indexOf-> //includes로 바꿔도 된다 ( -1 없이 가능 )
  //  console.log("금칙어가 있습니다.");
 // }
 //   else{
 //     console.log("통과");
 //   }
//}

//hasCola("와 사이다가 짱이야!"); // -1이나오는데 이는 if문에서 true 이기 때문에 참이 나온다. 
//hasCola("무슨소리 콜라가 짱이다!");
//hasCola("콜라");// 0 ->  if 0 = false 이기 떄문에 false가 나온다. 



//arr.splice(n,m,x)-> n~m까지 지우고 x를 추가  

//let arr = [1,2,3,4,5];
//let result = arr.splice(1,3);  삭제된 부분 

//console.log(arr); 삭제되고 결과 출력 
//console.log(result); 삭제된 부분 출력 

// slice -> 적용된 부분 자르기 
// concat -> 합쳐서 부분 재배열 

//let users = ["mike", "james", "janey"]

//users.forEach((item, index, arr) => {
 //           입력한이름,배열순서(0,1,2),users 
//});

//let arr = [1,2,3,4,5,1,2,3];

//arr.indexOf(3); // 2
//arr.indexOf(3,3); // 같은 것이 있으면 뒷값으로 적용 7
//arr.lastIndexOf(3); // 뒤에서부터 시작 7

 arr.find로 값을 찾으면 바로 반환           **이것으로 예제 만들어 보자 ***
arr..fliter -> 모든 값 반환 (find랑 비슷함)
arr.map -> 값을 index안에 추가해 주는것  

//join-> 배열을 문자열로 만든다. 
//splite-> 문자열을  배열로 만든다. 
//arr.join(사이에 뭐들가는지 작성 )

//let arr = [15,3,6,7,2];

//arr.sort((a,b) => {
 // console.log(a,b);  // Lodash사이트로 더 쉽게 가능 
//});


 

//console.log(arr); // 정렬할때는 문자열로 취급하기 때문에 1과 2가 앞에있는 15 ,2 가 먼저 나오게 된다. 


//let jam = [1,2,3,4,5];
//for , for of , forEach 차이점
// for : basic한 반복문 
//for of : 키만 접근하거나, 혹은 키와 값 모두 접근하거나 하는 것이 모두 가능하다.
//forEach 



//let result = 0; 
//jam.forEach((num)=>{
//  result += num;
//});                                                 
//console.log(result);
//reduce로 위의 것을 나타낼 수 있다. 

//************************
 // arr.reduce()
//인수로 함수를 받음 
//jam.reduce((이전값,현재값)=>{
//이전값+현재값;
//},초기값)
//************************

//const result = jam.reduce((prev,cur)=>{
//return prev + cur;},0)

//jam.reduce((이전값,현재값)=>{
//이전값+현재값;
//},초기값)


// 구조 분해 할당 구문 (Destructuring assignment)
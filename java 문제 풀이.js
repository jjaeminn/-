1. 
var nums = [100,200,300,400,500];
var spliceResult = nums.splice(0,3)

console.log(spliceResult);


2. 
var arr = [200,100,300];
arr.splice(2,2,10000,300);
console.log(arr);

3. 
//arr는 배열으로 객체로 정의 된다. 


var arr = [ 100,200,300];
console.log(typeof(arr));

4. 
//소수점이 포함 되어 있는 값은 float이다. 2이 틀림 
//boolean: 논리값으로 true/false로 나타내어 진다. 

a = 2.22

console.log(typeof(a));

//i 가 1로 정의 되었을 떄  i 는 2씩 증가 하므로 마지막에 찍히는 값은 16이다. 


var a = 10;
var b = 2;

for(var i = 1; i<5; i+=2) {
  a+= i; 
}


console.log(a+b);


6. 
 
1이 true 로 나온다. 



7. 변수명에는 숫자가 들어 갈 수 없다. 


8. 
//78 

var d = {
    'weight':78
  };
  
  console.log(d['weight']);


  9. 

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/") + month.concat("/") + day.concat("/") + hour.concat("/") + minute.concat("/") + second;

console.log(result);


10.

//크리스마스 트리처럼 별을 찍는 것이므로 일단 별과 공백을 구분으로 하면 별은 1,3,5,7 홀수개씩으로 늘어나고 공백은 5개에서 1개씩 줄어든다. 


var star = '';
for ( var i = 0; i < 5; i++) { // 5번 반복되도록 
   for (var j = 4; j > i; j--) {
      star += ' '; // 공백의 수가 점점 감소하는 것을 표현 
   }

   for (var k = 0; k <= (i * 2); k++ ) { // 처음 둘의 값은 0 이므로 별이 1개가 찍힘 그 다음 항상 2의 배수로 찍히도록 해주는 코드이다. 
   star += '*';
   }
  star += '\n'; // 반복 될때마다 줄바꿈 
}


console.log(star);
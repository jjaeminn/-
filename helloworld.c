#include <stdio.h>
int main_printfscanf_S(void)
{
	/*int age = 12;
	printf("%d\n", age); /*이렇게 하는게 주석이다. 
	return 0; 
	*/



	//실수형 변수에 대한 예제
	/*float f = 46.5f;
	printf("%.2f\n", f); // %뒤에 .2 <- 같은 것은 소수점 (2)번째 까지 나타내도록 만드는 코드이다.
	double d = 4.428;
	printf("%.2lf\n", d);// 반올림함 
	return 0;*/
	//const int Year = 2000;//상수로 const를 통하여 선언 
	//printf("태어난 연도: %d\n", Year);
	//연산
	//int add = 3 + 7; 
	//printf("3 + 7 = %d\n", add);
	//printf("%d + %d = %d", 3, 7, 3 + 7);

	//scanf : 키보드 입력을 받아ㅓ 저장 
	//int input;
	//printf("값을 입력하세요: ");
	//scanf_s("%d , &input"); // & = input 정의된 곳에 값을 입력받는 곳이다.
	//printf("입력값: %d\n, input"); 
	/*int one, two, three;
	printf("3개의 정수를 입럭하세요 : ");
	scanf_s("%d, %d ,%d", &one, &two, &three);
	printf("첫번째 값: %d\n", one);
	printf("두번째 값: %d\n",two);
	printf("세번째 값: %d\n", three);
	*/
	//문자(한 글자), 문자열(한 글자 이상의 여러 글자) 
	/*char c = 'A';
	printf("%c\n", c);*/
	/*char str[256]; //문자를 만들때에는 []를 통하여 만드는 구나 라고 지금은 알면 편하다. 
	scanf_s("%s", str, sizeof(str));
	printf("%s\n", str);*/

	// project
	// 경찰관이 범죄자의 정보를 입수 (조서작성)
	// 이름? 나이? 몸무게? -> 정수<-> 문자로 구분 
	char name[256];
	printf("이름이 뭐예요?");
	scanf_s("%s",&name, sizeof(name));

	int age;
	printf("나이가 뭐예요?");
	scanf_s("%d", &age);

	float weight;
	printf("몸무게는 몇 kg 인가요?");
	scanf_s("%f", &weight);

	double height;
	printf("키는 몇 cm 인가요?");
	scanf_s("%lf", &height);

	char what[256];
	printf("무슨 죄를 지었나요?");
	scanf_s("%s",&what, sizeof(what));
	// 조서 내용 출력 
	printf("\n\n--- 범죄자 정보 ---\n\n");
	printf("이름       : %s\n", name);
	printf("나이       : %d\n", age);
	printf("몸무게     : %.2\fn", weight);
	printf("키       : %.2lf\n", height);
	printf("범죄       : %s\n", what);


	return 0;
}
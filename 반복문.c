#include <stdio.h>

int main_printfstar(void)
{
	/*/int a = 10;

	printf("a는 %d\n", a);
	a++;
	printf("a는 %d\n", a);
	a++;
	printf("a는 %d\n", a);
	a++;
	int b = 20;
	printf("b는 %d\n", b++);// 다음거 부터 1씩 
	printf("b는 %d\n", ++b);//바로 1씩 더해진다. 
	printf("b는 %d\n", b++);

	int i = 1;
		printf(" Hello world %d\n", i++)//1
		printf(" Hello world %d\n", i++)//2
		printf(" Hello world %d\n", i++)//3
		*/
	//for
	/*for (int i = 1; i <= 10; i++) {
		printf("Hello world %d\n", i)
	}*/

	// while
	/*int i = 1
	while (i <= 10)
	{
		printf("Hello world %d\n", i++ );
	}*/

	/*for (int i = 1; i <= 3; i++) {              //  i = 1 일때 안에있는 j 관련 for문은 5번반복, i = 2일때 안에있는 j 관련 for문은 5번반복 --> 안에있는 for 문 밖에있는 for 문 구분 
		printf("첫번쨰 반복문 :%d\n", i);
			for (int j = 1; j <= 5; j++) {
				printf("           두번째 반복문 : %d\n", j);
		}

	}*/

	/*for (int i = 1; i <= 9; i++) {
		printf("%d단 계산\n ", i);
		for (int j = 1; j <= 9; j++) {
			printf(   "%d * %d= %d\n", i, j, i*j);
		}
	}*/

	/*for (int i = 0; i < 5; i++)
	{
		for (int j = i; j < 5 - 1; j++) 
		{
			printf("S");
		}
		for (int k = 0; k <= i; k++) 
		{
			printf("*");
		}
		printf("\n");
		
	}*/
	//피라미드를 쌓아라 - 프로젝트

	int floor;
	printf("몇 층으로 쌓겠느냐?");
	scanf_s("%d\n", &floor);
	for (int i = 0; i < floor; i++) 
	{
		for (int t = i; t < floor - 1; t++) {
			printf(" ");
		}
		for (int j = 0; j <= 2 * i; j++) {
			printf("*");
		}

		printf("\n");
	}
		

	return 0;

}

#include <stdio.h>

int main_printfstar(void)
{
	/*/int a = 10;

	printf("a�� %d\n", a);
	a++;
	printf("a�� %d\n", a);
	a++;
	printf("a�� %d\n", a);
	a++;
	int b = 20;
	printf("b�� %d\n", b++);// ������ ���� 1�� 
	printf("b�� %d\n", ++b);//�ٷ� 1�� ��������. 
	printf("b�� %d\n", b++);

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

	/*for (int i = 1; i <= 3; i++) {              //  i = 1 �϶� �ȿ��ִ� j ���� for���� 5���ݺ�, i = 2�϶� �ȿ��ִ� j ���� for���� 5���ݺ� --> �ȿ��ִ� for �� �ۿ��ִ� for �� ���� 
		printf("ù���� �ݺ��� :%d\n", i);
			for (int j = 1; j <= 5; j++) {
				printf("           �ι�° �ݺ��� : %d\n", j);
		}

	}*/

	/*for (int i = 1; i <= 9; i++) {
		printf("%d�� ���\n ", i);
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
	//�Ƕ�̵带 �׾ƶ� - ������Ʈ

	int floor;
	printf("�� ������ �װڴ���?");
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

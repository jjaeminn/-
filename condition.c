#include <stdio.h>

int main(void)
{
	int age = 15;
	if (age >= 20)
		printf("성인입니다.");					//***********조건문에는 ;이 들가면 안됨 --> 구분해주는 것 이니까
	else
		printf("미성년자입니다.");
	return 0;
}
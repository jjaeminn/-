#include <stdio.h>
int main_printfscanf_S(void)
{
	/*int age = 12;
	printf("%d\n", age); /*�̷��� �ϴ°� �ּ��̴�. 
	return 0; 
	*/



	//�Ǽ��� ������ ���� ����
	/*float f = 46.5f;
	printf("%.2f\n", f); // %�ڿ� .2 <- ���� ���� �Ҽ��� (2)��° ���� ��Ÿ������ ����� �ڵ��̴�.
	double d = 4.428;
	printf("%.2lf\n", d);// �ݿø��� 
	return 0;*/
	//const int Year = 2000;//����� const�� ���Ͽ� ���� 
	//printf("�¾ ����: %d\n", Year);
	//����
	//int add = 3 + 7; 
	//printf("3 + 7 = %d\n", add);
	//printf("%d + %d = %d", 3, 7, 3 + 7);

	//scanf : Ű���� �Է��� �޾Ƥ� ���� 
	//int input;
	//printf("���� �Է��ϼ���: ");
	//scanf_s("%d , &input"); // & = input ���ǵ� ���� ���� �Է¹޴� ���̴�.
	//printf("�Է°�: %d\n, input"); 
	/*int one, two, three;
	printf("3���� ������ �Է��ϼ��� : ");
	scanf_s("%d, %d ,%d", &one, &two, &three);
	printf("ù��° ��: %d\n", one);
	printf("�ι�° ��: %d\n",two);
	printf("����° ��: %d\n", three);
	*/
	//����(�� ����), ���ڿ�(�� ���� �̻��� ���� ����) 
	/*char c = 'A';
	printf("%c\n", c);*/
	/*char str[256]; //���ڸ� ���鶧���� []�� ���Ͽ� ����� ���� ��� ������ �˸� ���ϴ�. 
	scanf_s("%s", str, sizeof(str));
	printf("%s\n", str);*/

	// project
	// �������� �������� ������ �Լ� (�����ۼ�)
	// �̸�? ����? ������? -> ����<-> ���ڷ� ���� 
	char name[256];
	printf("�̸��� ������?");
	scanf_s("%s",&name, sizeof(name));

	int age;
	printf("���̰� ������?");
	scanf_s("%d", &age);

	float weight;
	printf("�����Դ� �� kg �ΰ���?");
	scanf_s("%f", &weight);

	double height;
	printf("Ű�� �� cm �ΰ���?");
	scanf_s("%lf", &height);

	char what[256];
	printf("���� �˸� ��������?");
	scanf_s("%s",&what, sizeof(what));
	// ���� ���� ��� 
	printf("\n\n--- ������ ���� ---\n\n");
	printf("�̸�       : %s\n", name);
	printf("����       : %d\n", age);
	printf("������     : %.2\fn", weight);
	printf("Ű       : %.2lf\n", height);
	printf("����       : %s\n", what);


	return 0;
}
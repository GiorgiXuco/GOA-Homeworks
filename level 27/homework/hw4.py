#4) დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.

num1 = int(input("enter number: "))

if num1 % 2 ==0:
    print(num1//2)
elif num1 % 2 !=0:
    print(num1*3+1) 
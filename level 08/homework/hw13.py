# 13)შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი.

num1 = int(input("enter number: "))

num2 = int(input("enter number2: "))

if num1 > num2 and num1 % 10 == 0:
    print("True")
elif num2 > num1 and num2 % 10 ==0:
    print("True")
else:
    print("False")
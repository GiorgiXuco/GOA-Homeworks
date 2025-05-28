# 16)დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ერთდროულად 50-ზე ნაკლები და 10-ის ჯერადი.

num1 = int(input("enter number: "))

if num1 < 50 and num1 % 10 == 0:
    print("True")
else:
    print("False")
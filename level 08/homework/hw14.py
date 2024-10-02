# 14)დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი უარყოფითი ან  ლუწი.

num1 = int(input("enter number: "))

if num1 < 0 or num1 % 2 == 0:
    print("True")
else:
    print("False")
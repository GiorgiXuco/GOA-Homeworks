# 5)დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი რიცხვი 100-ზე მეტი და ლუწი.

num1 = int(input("enter number: "))

if num1 > 100 and num1 % 2 == 0:
    print("True")
else:
    print("False")
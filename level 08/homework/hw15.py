# 16)მომხმარებლის შემოტანილი რიცხვი შეამოწმე, არის თუ არა  20-ის ჯერადი და დადებითი.

num1 = int(input("enter number: "))

if num1 > 0 or num1 % 20 == 0:
    print("True")
else:
    print("False")
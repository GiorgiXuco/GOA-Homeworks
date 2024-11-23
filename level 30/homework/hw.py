#1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

num1 = int(input("enter your number: "))
num2 = int(input("enter your name: "))

def plus(num1,num2):
    return num1 + num2
print(plus(num1,num2))


def minus(num1,num2):
    return num1 - num2
print(minus(num1,num2))


def multiply(num1,num2):
    return num1 * num2
print(multiply(num1,num2))


def divide(num1,num2):
    return num1 // num2
print(divide(num1,num2))
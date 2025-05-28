#5) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი ფუნქციამ უნდა დაგვიბრუნოს მისი საპირისპირო რიცხვი 

num1 = int(input("enter your number: "))

def plus(num1):
    return num1 - (2*num1)

print(plus(num1))
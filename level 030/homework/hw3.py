#3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

num1 = int(input("enter your number: "))

def plus(num1):
    if num1 %2==0:
        return "even"
    else:
        return "odd"

print(plus(num1))
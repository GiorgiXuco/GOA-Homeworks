#4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი

num1 = int(input("enter your number: "))

def plus(num1):
    if num1 < 0:
        return "negative"
    else:
        return "positive"

print(plus(num1))
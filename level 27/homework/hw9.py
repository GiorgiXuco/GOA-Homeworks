#4) მომხმარებელს შეაყვანინეთ რიცხვი და განაგრძეთ კითხვა მანამ, სანამ არ შეიტანს დადებით რიცხვს.

num1 = int(input("enter number: "))

while num1 <= 0:
    print("number is not positive")
    num1 = int(input("enter positive number: "))
print("number is positive")

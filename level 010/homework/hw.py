# 1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ
# რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ
# მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და 
# შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

num1 = int(input("შეიყვანე რიცხვი: "))
operation = (input("შეიყვანე მოქმედება: "))
num2 = int(input("შეიყვანე მეორე რიცხვი: "))

result = str(num1) + " + " + str(num2) + " = " + str(num1 + num2)
result2 = str(num1) + " * " + str(num2) + " = " + str(num1 * num2)
result3 = str(num1) + " // " + str(num2) + " = " + str(num1 // num2)
result4 = str(num1) + " - " + str(num2) + " = " + str(num1 - num2)

if operation == "+" :
    print(result)
elif operation == "*" :
    print(result2)
elif operation == "//" :
    print(result3)
elif operation == "-" :
    print(result4)
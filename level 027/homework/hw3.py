#3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.
num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))


sum = 0
Multiplied = 1


for i in range(num1, num2 + 1):
    sum += i
    Multiplied *= i


print(sum)
print(Multiplied)


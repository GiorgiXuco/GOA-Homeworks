# sum = 0

# for i in range(1 , 20):
#     sum = sum + i

# print(sum)

# 1) ერთიდან 50 მდე დაბეჭდეთ რიცხვების
# საშუალო არითმეტიკული

sum = 0

for i in range(1 , 51):
    sum = sum + i

print(sum // 50)


# 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცვამდე დაბეჭდეთ ყველა ლუწი რიცხვი

# num1 = int(input("enter number: "))

# for i in range(num1):
#     if i % 2 == 0:
#         print(i)


#  3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული

num1 = int(input("enter number: "))
sum = 0

for i in range(1 , (num1 + 1)):
    sum = sum + i

print(sum // 50)
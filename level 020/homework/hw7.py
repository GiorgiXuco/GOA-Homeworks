# 7) შექმენით ახალი სია მხოლოდ ლუწი რიცხვების ერთი დიდი სიიდან 

numbers = [1,2,3,4,5,6,7,8,9,10]
even = []

for i in numbers:
    if i % 2 == 0:
        even.append(i)
print(even)
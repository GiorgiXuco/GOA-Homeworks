# 9) შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 

num = [1,2,3,4,5,6,7,]

odd = 0
even = 0

for i in num:
    if i % 2 ==0:
        even += i
    else:
        odd += i

print(even)
print(odd)
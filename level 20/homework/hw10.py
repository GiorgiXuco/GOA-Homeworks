# 10) დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან 

num = [-1,2,-3,4,-5,6,-7,8]

positive = 0
negative = 0

for i in num:
    if i > 0 :
        positive += i
    else:
        negative += i

print(positive)
print(negative)
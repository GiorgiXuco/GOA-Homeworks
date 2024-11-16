#1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე 

sum = 0


for i in range (100):
    sum += i

print(sum)


sum = 0


for i in range (100):
    sum *= i

print(sum)


sum = 1

for i in range(1, 101):  
    sum /= i

print(sum)


sum = 0
i = 0

for i in range (100):
    sum -= i
print(sum)
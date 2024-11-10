#4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი

num = [1,2,3,4,5]
num2 = [2.4,43.4,12.3,12.5,23.6]
num3 = ["giorgi", "khutsishvili"]

nums = []

for i in num:
    if type(i) == int:
        nums.append(i)
print(nums)

for i in num2:
    if type(i) == float:
        nums.append(i)
print(nums)

for i in num3:
    if type(i) == str:
        nums.append(i)
print(nums)
#2)  შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია

names = ["Giorgi", "ana", "nino", "Giorgi", "luka", "Giorgi"]
my_name = "Giorgi"

count = 0

for i in names:
    if i == my_name:
        count += 1

print(count)

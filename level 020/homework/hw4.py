# 4) შექმენით დიდი სია სადაც გექნებათ ბევრი ელემენტი და შემდეგ გამოიტანთ 5 ის ჯერად ინდექსებზე მდგომ ელემენტებს

cars = ["BMW", "Mercedes", "AUDI", "Volkswagen", "Ford", "Opel", "Toyota", "Nissan", "Mazda", "Subaru", "Kia", "Volvo", "Honda", "hyundai", "Chevrolet", "lexus", "land rover", "Bentley", "Ferrari", "Bugatti"]

i = 0

while i < (20):
    if i % 5 == 0:
        print(cars[i])
    i += 1

for i in range(20):
    if i % 5 == 0:
        print(cars[i])

# 3) შექმენით სია და for loop დახმარებით გამოიტანეთ მხოლოდ ლუწი ინდექსებზე მდგომი ელემენტები

cars = ["BMW", "Mercedes", "AUDI", "Volkswagen", "Ford", "Honda", "Toyota", "Nissan", "Mazda", "Subaru", "Kia", "Volvo", "Honda", "hyundai", "Chevrolet"]
i = 0

while i < (15):
    if i %2==0:
        print(cars[i])
    i += 1
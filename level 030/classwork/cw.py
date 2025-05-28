from turtle import *
#3) შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია ხოლო ფუნქცია დააბრუნებს ამ სიის ელემენტების ჯამს

def sum():
    my_list = [1, 2, 3, 4, 5, 6, 7, 8]

    numbers_sum = 0
    for i in range(len(my_list)):
        numbers_sum += my_list[i]

    return numbers_sum

print(sum())


#პარამეტრი

#არგუმენტი



#4) შექმენით ფუნქცია რომელსაც არგუმენტად გადავცემთ სახელს შემდეგ კი ის გვესალმება hello name, გამოიძახეთ ფუნქცია რამდენჯერმე და გადაეცით არგუმენტად სხვადასხვა სახელები


def plus(name1,name2):
    return name2

print("hello " + plus ("saba","giorgi"))




exitonclick()
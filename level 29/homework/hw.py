#2) python - შექმენით რიცხვებით სავსე სია შემდეგ კი შექმენით პროგრამა რომელიც დაგვიბეჭდავს ამ სიიდან უდიდესს, გაიხსენეთ ბატონი ნიკას მოცემული დავალება გამოგადგებათ

numbers = [12, 32, 43, 21, 41, 159, 96, 43, 62, 72, 100]

biggest_number = numbers[0] 


for i in numbers:
    if i > biggest_number: 
        biggest_number = i  


print(biggest_number)

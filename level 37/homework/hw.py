# 2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე 

import random


goa_group50_students = ["ცხადაძე", "სოფია", "ხუციშვილი", "ჯანხოთელი", "აღათურია", "ბოკუჩავა", "ანა", "გლოველი", "ბექა", "სამსონიძე", "გოგა", "დაჩი", "გიორგაძე", "კესარია ჩიჩუა", "მერუმოვი", "ნიკა აბულაძე", "ალეკო"]

all_group = []
squad = []

while goa_group50_students != []:
    if len(goa_group50_students) <3:
        break
    else:
        for i in range(3):
            random_student = random.choice(goa_group50_students)
            squad.append(random_student)
            goa_group50_students.remove(random_student)

        all_group.append(squad)
        squad = []

for element in all_group:
    print(element)

print(goa_group50_students)
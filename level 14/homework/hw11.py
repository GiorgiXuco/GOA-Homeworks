# 11)დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს 
# კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით
# (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else

num = int(input("enter number 1-7: "))

if num == 1:
    print("ორშაბათი")
elif num == 2:
    print("სამშაბათი")
elif num == 3:
    print("ოთხშაბათი")
elif num == 4:
    print("ხუთშაბათი")
elif num == 5:
    print("პარასკევი")
elif num == 6:
    print("შაბათი")
elif num == 7:
    print("კვირა")
else:
    print("enter number 1-7")


print("Welcome to our Bank")                                  
print(" ")

username = input("Please enter username: ")
password = input("Please create your pasword: ")
age = int(input("Please enter your age: "))   

if age >= 18:

    name = input("Please enter your name: ")  
    lastname = input("Pelase enter your real lastname: ")
    personal_number = input("Please enter your personal number: ")
    pin_code = int(input("create your pin code: "))

    print(" ")
    print("How can we help you?")
    print(" ")                                        
    print("1. I want to take out a loan")
    print("2. I want to transfer money to another bank account")
    print("3. I want to cash out my money")
    print("4. I want to create new account")
    print(" ")
    num1 = int(input("Please select number 1-4: "))                 

    print(" ")
    
    if num1 == 1:                                                                
        int(input("How much money are you asking for?: "))
        pin1 = int(input("enter your pin code: "))
        if pin1 == pin_code:
            print("the deal is completed")
        else:
            print("the deal is not completed")

    elif num1 == 2:                                                                
        input("Please put in a card number: ")
        input("How much would you like to transfer?: ")
        pin2 = int(input("Please enter your pin code: "))
        if pin2 == pin_code:
            print("transfered succesfully")
        else:
            print("transfered is not succesfully")
    
    elif num1 == 3:                                                               
        input("How much money would you like withdraw?: ")
        pin3 = int(input("Please enter your pin code: "))
        if pin3 == pin_code:
            print("Cashout complite")
        else:
            print("Cashout is not complite")

    elif num1 == 4:                                                                
        input("do you want to create a new account?: ")
        pin4 = int(input("Please enter your pin code: "))
        if pin4 == pin_code:
            int(input("enter new pin code: "))
            print("your personal account has been created")
        else:
            print("deal is not completed")


else:
    print("you cannot open a new account you are underage")

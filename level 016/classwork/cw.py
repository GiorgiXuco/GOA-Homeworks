#while loop

# i = 0

# while i < 10:
#     print("hello")
#     i = i + 1


# while True:
#     print("1")




#  1) ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი while loop ის გამოყენებით

i =0
while i < 100:
    print(i)
    i += 1

# 2) ერთიდან 100 მდე დაბეჭდეთ ყველა ლუწი რიცხვი while loop ის გამოყენებით if ების გარეშე

i = 0

while i < 100:
    print(i)
    i += 2

# 3) ერთიდან 100 მდე დაბეჭდეთ ყველა ლუწი რიცხვი while loop ის გამოყენებით if ების გამოყენებით

i = 0

while i < 100:
    if i % 2 ==0:
        print(i)
    i += 1

#4) ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი თან გვერძე მიუწერეთ ლუწია თუ კენტი  while loop ის გამოყენებით

i = 0

while i < 100:
    if i % 2==0:
        print( str(i) + "even")
    else:
        print(str(i) + "odd")
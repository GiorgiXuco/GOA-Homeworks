# 12)დაწერე პროგრამა, რომელიც ამოწმებს, თუ string იწყება ასოთი "A" ან ასოთი "B".

word1 = input("enter word: ")

if word1.startswith(("A",  "B")):
    print("True")
else:
    print("False")
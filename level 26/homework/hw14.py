#6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში

names = ["gio", "teona", "nika", "tamuna", "temuri"]

t = []
for i in names:
    if i.startswith("t"):
        t.append(i)

print(names)
print(t)
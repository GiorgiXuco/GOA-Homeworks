my_list = ["giorgi", "daviti", "luka", "nika" ]
my_list2 = ["mariami", "ana", "saba", "levani"]

my_list.extend(my_list2)
print(my_list)


my_list.insert(5, "nikolozi")
print(my_list)


my_list.count("giorgi")
print(my_list)


index = 0
for element in my_list:
    if element == "giorgi":
        print(index)

    index += 1
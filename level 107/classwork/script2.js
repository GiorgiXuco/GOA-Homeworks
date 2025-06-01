// 2) შექმენით 3 სია, spread ოპერატორის გამოყენებით დაშალეთ თითოეული მათგანი და ჩასვით ახალ სიაში. ამ სიაში ასევე ჩაამატეთ 5 ნებისმიერი ელემენტი და დაბეჭდეთ.

const list1 = [1, 2, 3]
const list2 = ['a', 'b']
const list3 = [true, false]

const combinedList = [
    ...list1,
    ...list2,
    ...list3,
    'hello',
    54,
    "giorgi",
    15,
    [4, 5]
]

console.log(combinedList)
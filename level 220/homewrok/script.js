//  შექმენით OrderManager კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
// ◽ completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
// ❔ activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
// ❔ completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
//  --- მეთოდები --- 
// ◽ processOrder(orderId, customerName, callback) 
// ◽ printStatus()
// ❔ printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
// ❔ processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
// ❔ setTimeout ის შიგნით:
//     1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
//     2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
//     3)გამოიძახეთ printStatus მეთოდი
// ❔ callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
//  ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით


class OrderManager {
    constructor() {
        this.activeOrders = new Map();
        this.completedOrders = new Set();
    }

    processOrder(orderId, customerName, callback) {
        this.activeOrders.set(orderId, customerName);
        console.log(`მივიღეთ ახალი შეკვეთა: #${orderId} მომხმარებელი: ${customerName}`);

        setTimeout(() => {
            const customer = this.activeOrders.get(orderId);
            this.activeOrders.delete(orderId);
            this.completedOrders.add(customer);
            callback(orderId);
            this.printStatus();
        }, 3000);
    }

    printStatus() {
        console.log("\n--- აქტიური შეკვეთები ---");
        if (this.activeOrders.size === 0) {
            console.log("არ არის აქტიური შეკვეთები");
        } else {
            for (const [id, name] of this.activeOrders) {
                console.log(`შეკვეთა #${id} - მომხმარებელი: ${name}`);
            }
        }

        console.log("\n--- დასრულებული შეკვეთები ---");
        if (this.completedOrders.size === 0) {
            console.log("ჯერ არ არის დასრულებული შეკვეთები");
        } else {
            for (const name of this.completedOrders) {
                console.log(`მომხმარებელი: ${name}`);
            }
        }
        console.log('--------------------------\n');
    }
}

function orderCompletedCallback(orderId) {
    console.log(`✅ შეკვეთა #${orderId} დამთავრდა`);
}

const manager = new OrderManager();

manager.processOrder(101, "გიორგი", orderCompletedCallback);
manager.processOrder(102, "ნინო", orderCompletedCallback);
manager.processOrder(103, "მარიამი", orderCompletedCallback);

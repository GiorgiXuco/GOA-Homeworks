class OrderManager {
    constructor() {
        this.activeOrders = new Map();
        this.completedOrders = new Set();
        this.orderIdCounter = 1;
    }

    processOrder(customerName, food, callback) {
        const orderId = this.orderIdCounter++;
        this.activeOrders.set(orderId, { customerName, food });
        this.renderOrders();

        console.log(`მივიღეთ ახალი შეკვეთა: #${orderId} მომხმარებელი: ${customerName}`);

        setTimeout(() => {
            const customer = this.activeOrders.get(orderId)?.customerName;
            this.activeOrders.delete(orderId);
            this.completedOrders.add(customer);
            callback(orderId);
            this.renderOrders();
        }, 3000);
    }

    renderOrders() {
        const activeList = document.getElementById("activeOrdersList");
        const completedList = document.getElementById("completedOrdersList");

        activeList.innerHTML = "";
        for (const [id, { customerName, food }] of this.activeOrders) {
            const li = document.createElement("li");
            li.textContent = `${id}. [${customerName}, ${food}]  ⏳`;
            activeList.appendChild(li);
        }

        completedList.innerHTML = "";
        let i = 1;
        for (const name of this.completedOrders) {
            const li = document.createElement("li");
            li.textContent = `${i++}. ${name}`;
            completedList.appendChild(li);
        }
    }
}

function orderCompletedCallback(orderId) {
    console.log(`✅ შეკვეთა #${orderId} დამთავრდა`);
}

const manager = new OrderManager();

document.getElementById("orderBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput");
    const foodInput = document.getElementById("foodInput");

    const name = nameInput.value.trim();
    const food = foodInput.value.trim();

    if (name && food) {
        manager.processOrder(name, food, orderCompletedCallback);
        nameInput.value = "";
        foodInput.value = "";
    } else {
        alert("გთხოვ შეავსე ორივე ველი");
    }
});

class Employee {
    #id;
    #monthSalary;

    constructor(id, firstName, lastName, monthSalary) {
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.monthSalary = monthSalary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw new Error("გთხოვთ მიუთითოთ სრული სახელი (სახელი და გვარი)");
        }
    }

    get yearSalary() {
        return this.#monthSalary * 12;
    }

    get monthSalary() {
        return this.#monthSalary;
    }

    set monthSalary(value) {
        if (typeof value === 'number' && value > 0) {
            this.#monthSalary = value;
        } else {
            throw new Error("ხელფასი უნდა იყოს რიცხვი და ნულზე მეტი");
        }
    }

    get id() {
        return this.#id;
    }
}

class Manager extends Employee {
    constructor(id, firstName, lastName, monthSalary, department) {
        super(id, firstName, lastName, monthSalary);
        this.department = department;
    }

    set changeDepartment([newDepartment, newSalary]) {
        if (typeof newDepartment !== 'string' || newDepartment.trim() === '') {
            throw new Error("დეპარტამენტის სახელი უნდა იყოს ტექსტი");
        }

        if (typeof newSalary !== 'number' || newSalary <= this.monthSalary) {
            throw new Error("ახალი ხელფასი უნდა იყოს უფრო მაღალი, ვიდრე არსებული");
        }

        this.department = newDepartment;
        this.monthSalary = newSalary;
    }

    get yearSalary() {
        return this.monthSalary * 12 * 1.2;
    }

    info() {
        return `ID: ${this.id}, Name: ${this.fullName}, Department: ${this.department}, Monthly Salary: ${this.monthSalary}, Yearly Salary: ${this.yearSalary}`;
    }
}

const manager = new Manager(101, 'Nino', 'Gelashvili', 3500, 'Sales');

console.log(manager.info());

manager.fullName = 'Irakli Kapanadze';
console.log(manager.fullName);

manager.changeDepartment = ['Marketing', 4000];
console.log(manager.info());


const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 37,
    department: 'management'
}

user.setAge = function (newAge) {
    this.age = newAge;
}
user.getYearsBeforeRetirement = function () {
    return 65 - this.age;
}

user.setAge(47);
console.log(user.age);
console.log(user.getYearsBeforeRetirement());

const client = {
    fullName: 'Max Power',
    creditLimit: 100000,
    balance: -25000,
    precentOfMinPayment: 15,
    getMinPaymant() {
        if (this.balance > 0) {
            console.log('Задолженности нет.');
        } else {
            console.log(`Минимальный платеж: ${Math.abs(this.balance)/100*this.precentOfMinPayment}`);
        }
    },
    withdraw(writeOff) {
        if (((this.creditLimit + this.balance) - writeOff) < 0) {
            console.log('Недостаточно средств');
        } else {
            this.balance = (this.balance - writeOff);
            console.log('Ваш баланс: ' + this.balance);
        }
    },
    relif(add) {
        this.balance += add;
        console.log('Ваш баланс: ' + this.balance);
    }
}

client.getBalance = function () {
    if (this.balance < 0) {
        console.log(`Ваша задолженность ${Math.abs(this.balance)}`);
    } else {
        console.log(`Ваш баланс ${this.balance}`);
    }
}

client.getMinPaymant();
client.getBalance();
client.withdraw(40000);
client.withdraw(80000);
client.relif(50000);

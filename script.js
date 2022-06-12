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

const calculator = {
    firstNumber: 0,
    secondNumber: 0,
    value: 0,
    calcSumm() {
        this.firstNumber = prompt('Enter first number');
        this.secondNumber = prompt('Enter second number');
        let summa = +this.firstNumber + +this.secondNumber;
        console.log(`FirstNumber: ${this.firstNumber}; SecondNumber: ${this.secondNumber}; Summ = ${summa}`);
    },
    calcDiff() {
        this.firstNumber = prompt('Enter first number');
        this.secondNumber = prompt('Enter second number');
        let diff = this.firstNumber - this.secondNumber;
        console.log(`FirstNumber: ${this.firstNumber}; SecondNumber: ${this.secondNumber}; Difference = ${diff} `);
    },
    calcMult() {
        this.firstNumber = prompt('Enter first number');
        this.secondNumber = prompt('Enter second number');
        let mult = this.firstNumber * this.secondNumber;
        console.log(`FirstNumber: ${this.firstNumber}; SecondNumber: ${this.secondNumber}; Product = ${mult} `);
    },
    calcDivis() {
        this.firstNumber = prompt('Enter first number');
        this.secondNumber = prompt('Enter second number');
        let divis = this.firstNumber / this.secondNumber;
        console.log(`FirstNumber: ${this.firstNumber}; SecondNumber: ${this.secondNumber}; Division = ${divis} `);
    },
    memAdd() {
        this.value = +prompt(`Enter the number in to memory`);
        console.log(`In memory: ${this.value}`);
    },
    memClear() {
        this.value = 0;
        console.log(`In memory: ${this.value}`);
    },
    numberAddMem(number) {
        this.value += +number;
        console.log(`In memory: ${this.value}`);
    },
    memRead() {
        console.log(`In memory: ${this.value}`);
    }

}
//console.log(calculator);
//calculator.calcSumm();
//calculator.calcDiff();
//calculator.calcMult();
//calculator.calcDivis();
calculator.memAdd();
calculator.numberAddMem(11);
calculator.memRead();
//calculator.memClear();
//console.log(calculator);

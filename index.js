import inquirer from "inquirer";
/*
console.log("Welcome to the Super Mart");
console.log("What do you want to buy?");
let i = 0;
for(i=0;i<=999999999;i++){
    
}
console.clear();/*
for(i=0;i<1;i++){
let user = await inquirer.prompt(
    {
        type: 'list',
        name: 'choice',
        message: 'Select which item you want to buy?',
        choices: ['Fruits','Vegetables','Groceries','Exit']
    }
)
console.log(`Your choice is ${user.choice}`);
    if(user.choice == "Fruits"){
        console.clear();
        //console.log("The available fruits are:");
        let user1 = await inquirer.prompt(
            {
                type: 'checkbox',
                name: 'choice',
                message: 'Select which item you want to buy?',
                choices: ['Apple','Mango','Banana','Kiwi','Pinaple','Cherry','Water Mellon','Back']
            }
        )
    }

}*/
let price_fruit = [100, 200, 150, 250, 300];
let price_veg = [80, 190, 250, 300, 150];
let price_groc = [300, 250, 400, 1000, 600];
let items = [""];
let bill = 0;
let temp = "";
let tempm = "1";
while (tempm != "0") {
    temp = "";
    console.log("Press 1 for Fruits");
    console.log("Press 2 for Vegetables");
    console.log("Press 3 for Groceries");
    console.log("Press 0 to Exit");
    let user = await inquirer.prompt({
        type: 'number',
        name: 'choice',
        message: 'Enter number '
    });
    tempm = user.choice;
    console.log(`user.choice = ${user.choice}`);
    if (user.choice == 1) {
        console.log(`Press a for Apple :: ${price_fruit[0]}/kg`);
        console.log(`Press b for Banana :: ${price_fruit[1]}/kg`);
        console.log(`Press m for Mango :: ${price_fruit[2]}/kg`);
        console.log(`Press g for Grapes :: ${price_fruit[3]}/kg`);
        console.log(`Press s for strawberries :: ${price_fruit[4]}/kg`);
        console.log(`Press 0 to go to main menu`);
        while (temp != "0") {
            let user1 = await inquirer.prompt({
                type: 'input',
                name: 'frt',
                message: 'Enter Fruit character '
            });
            items.push(user1.frt);
            temp = user1.frt;
            if (user1.frt == "a") {
                bill = bill + price_fruit[0];
            }
            else if (user1.frt == "b") {
                bill = bill + price_fruit[1];
            }
            else if (user1.frt == "m") {
                bill = bill + price_fruit[2];
            }
            else if (user1.frt == "g") {
                bill = bill + price_fruit[3];
            }
            else if (user1.frt == "s") {
                bill = bill + price_fruit[4];
            }
            else {
                bill = bill;
            }
        }
    }
    else if (user.choice == 2) {
        console.log(`Press t for Tomato :: ${price_veg[0]}/kg`);
        console.log(`Press e for Egg Plant :: ${price_veg[1]}/kg`);
        console.log(`Press p for pumpkin :: ${price_veg[2]}/kg`);
        console.log(`Press pe for Peas :: ${price_veg[3]}/kg`);
        console.log(`Press sp for spinich :: ${price_veg[4]}/kg`);
        console.log(`Press 0 to go to main menu`);
        while (temp != "0") {
            let user2 = await inquirer.prompt({
                type: 'input',
                name: 'veg',
                message: 'Enter Vegetable character '
            });
            items.push(user2.veg);
            temp = user2.veg;
            if (user2.veg == "t") {
                bill = bill + price_veg[0];
            }
            else if (user2.veg == "e") {
                bill = bill + price_veg[1];
            }
            else if (user2.veg == "p") {
                bill = bill + price_veg[2];
            }
            else if (user2.veg == "ps") {
                bill = bill + price_veg[3];
            }
            else if (user2.veg == "sp") {
                bill = bill + price_veg[4];
            }
            else {
                bill = bill;
            }
        }
    }
    else if (user.choice == 3) {
        console.log(`Press l for Lentils :: ${price_veg[0]}/kg`);
        console.log(`Press te for Tea :: ${price_veg[1]}/kg`);
        console.log(`Press sg for sugar :: ${price_veg[2]}/kg`);
        console.log(`Press o for cooking oil :: ${price_veg[3]}/kg`);
        console.log(`Press wp for Washing Powder :: ${price_veg[4]}/kg`);
        console.log(`Press 0 to go to main menu`);
        while (temp != "0") {
            let user3 = await inquirer.prompt({
                type: 'input',
                name: 'gro',
                message: 'Enter Grocerry character '
            });
            items.push(user3.gro);
            temp = user3.gro;
            if (user3.gro == "l") {
                bill = bill + price_groc[0];
            }
            else if (user3.gro == "te") {
                bill = bill + price_groc[1];
            }
            else if (user3.gro == "p") {
                bill = bill + price_groc[2];
            }
            else if (user3.gro == "ps") {
                bill = bill + price_groc[3];
            }
            else if (user3.gro == "s") {
                bill = bill + price_groc[4];
            }
            else {
                bill = bill;
            }
        }
    }
    else if (user.choice == 0) {
        console.clear();
        break;
    }
    else {
        console.log("Enter correct value");
    }
    console.clear();
}
console.clear();
console.log(`You have bought ${items.length - 1} items and grand total of ${bill} Rupees`);
if (bill >= 5000) {
    console.log(`Discount on your bill is 20% and your discounted payable bill is ${bill * 0.8} Rupees`);
}
else if (bill >= 3000 && bill < 5000) {
    console.log(`Discount on your bill is 15% and your discounted payable bill is ${bill * 0.85} Rupees`);
}
else if (bill >= 1500 && bill < 3000) {
    console.log(`Discount on your bill is 10% and your discounted payable bill is ${bill * 0.9} Rupees`);
}
else {
    console.log(`Discount on your bill is 5% and your discounted payable bill is ${bill * 0.95} Rupees`);
}
console.log("Press 1 for online transfer");
console.log("Press 2 for credit/debit card payments");
console.log("Press 3 for cash payments");
let user4 = await inquirer.prompt({
    type: 'input',
    name: 'pymnt',
    message: 'Enter the preffered payment method '
});
if (user4.pymnt == "1") {
    console.log("you selected online transfer");
}
else if (user4.pymnt == "2") {
    console.log("you selected credit/debit card");
}
else if (user4.pymnt == "3") {
    console.log("you selected cash payment");
}
else { }
// new Program
/*let user = await inquirer.prompt
class ShoppingScenario {
    private customerName: string;
    private totalBill: number = 0;

    constructor(customerName: string) {
        this.customerName = customerName;
    }

    buyGroceries(choice: string): void {
        console.log(`Welcome, ${this.customerName}! Let's start shopping for groceries.`);

        if (choice.toLowerCase() === 'fruits') {
            console.log('Great choice! Here are some available fruits:');
            this.displayItems(['Apple', 'Banana', 'Orange'], [1.5, 0.8, 1.2]);
        } else if (choice.toLowerCase() === 'vegetables') {
            console.log('Good choice! Here are some available vegetables:');
            this.displayItems(['Carrot', 'Broccoli', 'Spinach'], [1.2, 2.0, 1.8]);
        } else {
            console.log('Invalid choice. Please choose either "fruits" or "vegetables".');
            return;
        }

        this.calculateTotalBill();
        console.log(`Thank you for shopping, ${this.customerName}! Your total bill is $${this.totalBill.toFixed(2)}.`);
    }

    checkDiscounts(): void {
        console.log(`Hello again, ${this.customerName}! Let's check for discounts.`);

        if (this.totalBill >= 50) {
            console.log('Congratulations! You qualify for a 10% discount.');
            const discountAmount = this.totalBill * 0.1;
            this.totalBill -= discountAmount;
            console.log(`Your discounted total is $${this.totalBill.toFixed(2)}.`);
        } else {
            console.log('Unfortunately, you did not qualify for a discount this time.');
            console.log(`Your total remains $${this.totalBill.toFixed(2)}.`);
        }
    }

    checkoutProcess(): void {
        console.log(`Thank you for shopping, ${this.customerName}! Let's proceed to the checkout process.`);

        const paymentOptions: string[] = ['Credit Card', 'Debit Card', 'Cash'];
        let chosenPaymentMethod: string = '';

        console.log('Choose your preferred payment method:');
        for (let i = 0; i < paymentOptions.length; i++) {
            console.log(`${i + 1}. ${paymentOptions[i]}`);
        }

        let paymentChoice: number = 0;
        while (paymentChoice < 1 || paymentChoice > paymentOptions.length) {
            paymentChoice = Number(prompt('Enter the number corresponding to your payment method:'));
            if (isNaN(paymentChoice) || paymentChoice < 1 || paymentChoice > paymentOptions.length) {
                console.log('Invalid input. Please enter a valid payment method number.');
            }
        }

        chosenPaymentMethod = paymentOptions[paymentChoice - 1];
        console.log(`You have chosen to pay with ${chosenPaymentMethod}.`);
        console.log('Processing payment...');

        // Simulate payment confirmation
        console.log(`Payment successful! Thank you, ${this.customerName}, for shopping with us.`);
    }

    private displayItems(items: string[], prices: number[]): void {
        for (let i = 0; i < items.length; i++) {
            console.log(`${i + 1}. ${items[i]} - $${prices[i].toFixed(2)}`);
        }
    }

    private calculateTotalBill(): void {
        const selectedItems: number[] = this.getUserSelection();
        for (const itemIndex of selectedItems) {
            if (itemIndex >= 1 && itemIndex <= 3) {
                this.totalBill += itemIndex === 1 ? 1.5 : itemIndex === 2 ? 0.8 : 1.2;
            } else if (itemIndex >= 4 && itemIndex <= 6) {
                this.totalBill += itemIndex === 4 ? 800 : itemIndex === 5 ? 500 : 150;
            } else if (itemIndex >= 7 && itemIndex <= 9) {
                this.totalBill += itemIndex === 7 ? 5 : itemIndex === 8 ? 20 : 10;
            }
        }
    }

    private getUserSelection(): number[] {
        const selectedItems: number[] = [];
        const numberOfItems = Number(prompt('Enter the number of items you want to buy:'));

        if (isNaN(numberOfItems) || numberOfItems <= 0) {
            console.log('Invalid input. Please enter a valid number of items.');
            return selectedItems;
        }

        console.log('Enter the numbers corresponding to the items you want to buy:');
        for (let i = 0; i < numberOfItems; i++) {
            const selectedItem = Number(prompt(`Item ${i + 1}:`));
            if (isNaN(selectedItem) || selectedItem < 1 || selectedItem > 9) {
                console.log('Invalid input. Please enter a valid item number.');
                return selectedItems;
            }
            selectedItems.push(selectedItem);
        }

        return selectedItems;
    }
}

// Example Usage:
const customer = new ShoppingScenario('John');

// Scenario 1: Buying Groceries
customer.buyGroceries('fruits');

// Scenario 2: Checking Discounts
customer.checkDiscounts();

// Scenario 3: Checkout Process
customer.checkoutProcess();
*/ 

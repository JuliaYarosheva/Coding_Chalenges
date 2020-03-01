/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

const restaurantTip = [];
const restaurantTotalBill = [];

    function calculateTips(bill) {
        switch (true) {
            case bill < 50:
                return 0.2;
            case bill >= 50 && bill <= 200:
                return 0.15;
            default:
                return 0.1;
        }
    }

    function calculate(bill) {
        const tipPers = calculateTips(bill);

        let tip = bill * tipPers;
        let totalBill = bill + tip;

        restaurantTip.push(tip.toFixed(2));
        restaurantTotalBill.push(totalBill);
    }

    calculate(124);
    calculate(48);
    calculate(268);

    console.log(restaurantTip);
    console.log(restaurantTotalBill);
const bill_input = document.getElementById("Bill");
const people_input = document.getElementById("People");
var bill = 0;
var tip = 0;
var custom_tip = document.getElementById("custom");
var people = 1;
const five_percent_input = document.getElementById("5");
const ten_percent_input = document.getElementById("10");
const fifteen_percent_input = document.getElementById("15");
const twentyfive_percent_input = document.getElementById("25");
const fifty_percent_input = document.getElementById("50");
const tip_amount_result = document.getElementById("tip-amount");
const total_amount_result = document.getElementById("total-amount");
const reset_button = document.getElementById("Reset");

/*
1. Get all the inputs
2. calculate
3. show the results
4. reset to clear all inputs and outputs
*/

function calculation() {
    var tip_amount_pp = (bill * tip)/people;
    var tip_amount_pp_formatted = "$" + tip_amount_pp.toFixed(2);
    tip_amount_result.innerHTML = tip_amount_pp_formatted;

    var total_amount_pp = (bill + (bill * tip))/people;
    var total_amount_pp_formatted = "$" + total_amount_pp.toFixed(2); // fix something here
    total_amount_result.innerHTML = total_amount_pp_formatted;
}


function selectTip() {
    five_percent_input.addEventListener('click', function() {
        tip = 0.05;
        calculation();
    })

    ten_percent_input.addEventListener('click', function() {
        tip = 0.10;
        calculation();
    })

    fifteen_percent_input.addEventListener('click', function() {
        tip = 0.15;
        calculation();
    })

    twentyfive_percent_input.addEventListener('click', function() {
        tip = 0.25;
        calculation();
    })

    fifty_percent_input.addEventListener('click', function() {
        tip = 0.50;
        calculation();
    })

    custom_tip.addEventListener('change', function() {
        tip = custom_tip.value;
        tip = tip/100;
        calculation();
    })
}

function getInput() {
    bill_input.addEventListener('change', function() {
        bill = bill_input.value;
        if (bill == "") {
            bill = 0;
        }
        bill = parseFloat(bill, 10);
        calculation();
    })

    people_input.addEventListener('change', function() {
        people = people_input.value;
        if (people == "") {
            people = 1;
        }
        people = parseInt(people, 10);
        calculation();
    })
}

function reset() {
    reset_button.addEventListener('click', function() {
        bill = 0;
        tip = 0;
        people = 1;
        tip_amount_result.innerHTML = "$0.00";
        total_amount_result.innerHTML = "$0.00";
        bill_input.value ="";
        people_input.value ="";
        custom_tip.value ="";
    })
}


function main() {
    getInput();
    selectTip();
    calculation();
    reset();
}

main();
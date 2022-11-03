/*

There are three function
1. calculateBill()
2. increasePeople()
3. decreasePeople() 

*/

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculator the total bill per person
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)

    // get the tip from the user input and convert it into percentage
    const tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    const tipAmount = bill * tipPercentage

    // calculate the total
    const totalAmount = tipAmount + bill

    // calculate the per person total
    const perPersonTotal = totalAmount / numberOfPeople

    // Update the per person total and show it to DOM
    perPersonTotalDiv.innerText = `$${ perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    // increament the amount of people
    numberOfPeople += 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}
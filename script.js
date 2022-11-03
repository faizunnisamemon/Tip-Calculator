/*

There are three function
1. calculateBill()
2. increasePeople()
3. decreasePeople() 

*/

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonalTotal = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculator the total bill per person
const calculateBill = () => {
    // get bill from user input & convert it into a number
}
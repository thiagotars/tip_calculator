const billInput = document.getElementById('billInput')
const pricePerPerson = document.getElementById('pricePerPerson')

let tipValue = document.getElementById('tipValue')
let numberOfPeople = document.getElementById('numberOfPeople')


const calculateBill = () => {
    let billTotal = Number(billInput.value)
    let tipAmount = (Number(tipValue.textContent) / 100) * billTotal 
    let billPlusTip = billTotal + tipAmount
    let perPerson = billPlusTip / numberOfPeople.textContent 
    pricePerPerson.textContent = perPerson.toFixed(2)
    
}

let tip = Number(tipValue.textContent)

const tipDecreaseBtn = () => {
    if (tipValue.textContent > 0) {
        tip -= 5
        tipValue.textContent = tip
        console.log(tip)
        calculateBill()
    }
}

const tipIncreaseBtn = () => {
    
    tip += 5
    tipValue.textContent = tip
    console.log(tip)
    calculateBill()
}

let splitBy = Number(numberOfPeople.textContent)

const peopleDecreaseBtn = () => {
    if (numberOfPeople.textContent > 1) {
        splitBy -= 1
        numberOfPeople.textContent = splitBy
        console.log(splitBy)
        calculateBill()
    }
}


const peopleIncreaseBtn = () => {
    splitBy += 1 
    numberOfPeople.textContent = splitBy
    console.log(splitBy)
    calculateBill()
    
}


const resetBtn = document.getElementById('reset')

const reset = () => {
    splitBy = 1
    numberOfPeople.textContent = splitBy
    tip = 0
    billInput.value = ''
    tipValue.textContent = tip
    calculateBill()
}
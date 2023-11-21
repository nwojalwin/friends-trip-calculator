let price = document.querySelector("#price");
let people = document.querySelector("#people");
let foodCost = document.querySelector('#tip');
let error = document.querySelector('.error');
let info = document.querySelector('.info');
const count = document.querySelector('.count');
let result = document.querySelector('.result');



function checkInput(){

console.log(price.value);
console.log(people.value);
const priceAll = parseFloat(price.value);
const peopleAll = parseInt(people.value);

const selectedFoodCost = foodCost.value;


    if(priceAll===0 || peopleAll===0 || price.value==='' || people.value===''){
        error.style.display = "block";
        error.style.color = "red";
    }
    else
    {
        error.style.display = "none";
        let finalCost = [priceAll + (priceAll*selectedFoodCost)]/peopleAll;
parseFloat(finalCost);
        result.innerHTML = finalCost
    }
}

count.addEventListener('click', checkInput)
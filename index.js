/* <---Question 1---> */
console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        ∙ Do not use numbers to reference the last element, find it programmatically.
        ∙ ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.`);
/* <---Solution--->*/

//arrow function will subtract the first element of the array from the last and then results are shown on console
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
const subFromLastAge = ages => ages[ages.length-1] - ages[0] ;
console.log('Ages: ', ages);
console.log('Difference between first and last age: ', subFromLastAge(ages));

//new element is added to end of array and different result is seen in subtraction
ages.push(97);
console.log('Ages: ', ages);
console.log('Difference between first and last age: ', subFromLastAge(ages));

//lop will add up all elements in the array then find average by dividing sum from length of array
let sumOfAges = 0
for (let i = 0; i <ages.length; i++){
    sumOfAges += ages[i];
}
let avgAge = sumOfAges/ages.length;
console.log('Total sum: ', sumOfAges);
console.log('Average age: ', avgAge);

/* <---Question 2---> */
console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
 /* <---Solution--->*/

 //loops adds up the characters of all names then finds average through division of sum by length of array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;
for (let i = 0; i < names.length; i++){
    totalChars += names[i].length;
}
let avgChars = totalChars/names.length;
console.log('Average name length: ', avgChars);

//loops goes through each element adding it to one string
let concatNames = '';
for (let i = 0; i <names.length; i++){
    concatNames = concatNames.concat(names[i] + ' ')
};
console.log('Concatenated list of names: ', concatNames);

/* <---Question 3---> */
console.log(`3. How do you access the last element of any array?`);
/* <---Solution--->*/

//find last element by looking for it with index (dynamic by using length-1)
console.log('The last element of the names array is: ', names[names.length-1]);

/* <---Question 4---> */
console.log(`4. How do you access the first element of any array?`);
/* <---Solution--->*/

//find first element with index (first one will always be 0)
console.log('The first element of the names array is: ', names[0]);

/* <---Question 5---> */
console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    For example:
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array`);
/* <---Solution--->*/

//loops takes names array from question 2, goes through each element while calculating length of each name, adding each amount as a new element in a new empty array
let nameLengths = []
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
} 
console.log('Here is the array of names: ', names);
console.log('The length of each name in the array is: ', nameLengths);

/* <---Question 6---> */
console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
/* <---Solution--->*/

//loop goes through nameLengths array that now has amount of characters of each element from names array, adding all them up
let charsTotal = 0
for (let i = 0; i < nameLengths.length; i++){
    charsTotal += nameLengths[i];
}
console.log('The total amount of characters from all names is: ', charsTotal);

/* <---Question 7---> */
console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);
/* <---Solution--->*/

//function takes a parameter of a string that is wanted to be repeated and then a second parameter that decides how many times the string is repeated
function concatWords(word, n){
    return word.repeat(n);
}
console.log(concatWords('Hello', 3));

/* <---Question 8---> */
console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`);
/* <---Solution--->*/

//function has two parameters (first and last names) and then puts them together with help of template literals
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Nathan', 'Aguilar'));

/* <---Question 9---> */
console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
/* <---Solution--->*/

//loops adds up the sum of the elements in an array, then checks if it's greater than 100 with an if statement, returning true if that's the case
let numListOne = [23,  11, 7, 43, 13];
let numListTwo = [20, 54, 23, 70, 14];
let sumOfNum = 0;
let greaterThan100 = false;
function sumCheck(numArr){
    for (let i = 0; i < numArr.length; i++){
        sumOfNum += numArr[i];
    }
    console.log('The sum of the numbers in the array is: ', sumOfNum);
    if (sumOfNum > 100){
        greaterThan100 = true;
    }
    console.log('The sum being greater than 100 is: ', greaterThan100);
}
sumCheck(numListOne);
sumCheck(numListTwo);


/* <---Question 10---> */
console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
/* <---Solution--->*/

//function contains loop that adds up all the elements, then divides them by the length of the array to find the average
let numList = [23, 65, 20, 45, 36, 54, 12, 71];
let sumOfArr = 0;
function avgNum(arrOfNum){
    for (let i = 0; i < arrOfNum.length; i++){
        sumOfArr += arrOfNum[i];
    }
    console.log('The sum of all numbers in the array is: ', sumOfArr);
    let avgOfArr = sumOfArr / arrOfNum.length;
    console.log('The average of this array is: ', avgOfArr);
}
avgNum(numList);

/* <---Question 11---> */
console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`);
/* <---Solution--->*/

//function contains that two loops that adds up the elements in their respective arrays (based on the parameters), finds the averages, and then uses an if statements to determine if the first array was greater than the second
let firstNumList = [45, 23, 70, 33, 12];
let secondNumList = [23, 41, 34, 21, 15]
let sumOfNumArrOne = 0;
let sumOfNumArrTwo = 0;
let greaterThanArrTwo = false;
function avgComp(numArrOne, numArrTwo){
    for (let i = 0; i < numArrOne.length; i++){
        sumOfNumArrOne += numArrOne[i];
    }
    for (let i = 0; i < numArrTwo.length; i++){
        sumOfNumArrTwo += numArrTwo[i];
    }
    let avgOfNumArrOne = sumOfNumArrOne / numArrOne.length;
    let avgOfNumArrTwo = sumOfNumArrTwo / numArrTwo.length;
    if (avgOfNumArrOne > avgOfNumArrTwo){
        greaterThanArrTwo = true;
        console.log('The first array being greater than the second has been determined to be: ', greaterThanArrTwo);
        console.log('The average of the first array (', avgOfNumArrOne, ') was greater in comparison to the average of the second array (', avgOfNumArrTwo, ')');
    } else {
        console.log('The first array being greater than the second has been determined to be: ', greaterThanArrTwo);    
        console.log('The average of the first array (', avgOfNumArrOne, ') was lesser than in comparison to the average of the second array (', avgOfNumArrTwo, ')');
    }
}
avgComp(firstNumList, secondNumList);

/* <---Question 12---> */
console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
/* <---Solution--->*/

//function that takes the two parameters that need to be true in order to make buyDrink true (both parameters are false on default), containing the appropriate responses decided by which conditons were met
let buyDrink = false;
let isHotOutside = false;
let enoughMoney = false;
function willBuyDrink(isHotOutside, moneyInPocket){
    if (moneyInPocket > 10.50){
        enoughMoney = true;
    }
    if (isHotOutside == false && enoughMoney == false){
        console.log("Thank goodness it's not hot. It's not like I had enough money to buy a drink anyways.");
    } else if (isHotOutside == false){
        console.log("It's not that hot outside, so a drink isn't necessary.");
    } else if (enoughMoney == false){
        console.log("Dang. I don't have enough money for a drink.")
    } else {
        buyDrink = true;
        console.log("It's ", buyDrink, ". It is a good idea to buy a drink. I have enough money anyways.")
    }
}
willBuyDrink(true, 10.51);

/* <---Question 13---> */
console.log(`13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`);
/* <---Solution--->*/

//created a game of elimination of smallest number by using a function containing a while loop that finds the smallest number, indentifies its index, then splices it (loop continues until the biggest number remains)
let listOfNumbers = [2, 67, 42, 78, 32, 47, 21, 89, 39, 20, 30];
function eliminationGame(num){
    while (num.length != 1){
        console.log('The remaining numbers: ', num);
        let smallest = Math.min(...num);
        console.log('The smallest number (', smallest, ') has been eliminated.');
        a = num.indexOf(smallest);
        num.splice(a , 1);
    }
}
eliminationGame(listOfNumbers);
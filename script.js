// A. Q + A
//1. How do we assign a value to a variable?
//The assignment (=) operator is used to assign a value to a variable.
let x = 2;
const y = 3;
console.log(x);
// Expected output: 2
console.log(x = y + 1); 
// Expected output: 4
console.log(x = x * y); 
// Expected output: 12

//2. How do we change the value of a variable?
//Declare and initialize a variable
let myVariable = 10;
// Update the variable
let myvari = myVariable += 10; 
console,console.log(myVariable);

//3.How do we assign an existing variable to a new variable?
let myVar = 5;
console.log(myVar)
//Assign existing value to new variable
let myNum = myVar;
console.log(myNum )

//4.Remind me, what are declare, assign, and define
         // Declare is Creating a variable
         // Assign is assign a value to a variable usind equal sign

// 5.What is pseudocoding and why should you do it?
// Pseudocode is an informal way of programming descriptionm that does not require any strict programming language syntax or underlying technology considerations. 

//6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
             //I would say it is close to 90% is understanding the problem.

//B. Strings 
// 1. Create a variable called firstVariable
let firstVariable1 = "dataType";
//2.Assign it the value of the string "Hello World"
let firstVariable2 = "Hello World"
console.log(firstVariable2)

//3.Change the value of this variable to some number
let firstVariable3 = 45
 console.log(firstVariable3)

//4. Store the value of firstVariablein a new variable called secondVariable
let firstVariable4 = 45
let  secondVariable = firstVariable4
console.log(secondVariable)

//5. Change the value of secondVariableto any string.
let  secondVariable1 = "Exellent"
console.log(secondVariable1)

//6. What is the value of firstVariable?
let firstVariable = 45
console.log(firstVariable)

//7.Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjean
// let  yourName = "Marta"
// console.log(`Hello, my name is ${yourName}`)
//C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

 console.log(a <b);
  console.log(c > d);
 console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
console.log(false && false && false && false && false|| true);
console.log(false || !false)
 console.log(e === 'Kevin');
  console.log(a === !b ===! c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !=='48');
  
//D. The farm
//1. Declare a variable animal. Set it to be either "cow" or something else
 let animal = "com"
//2.Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow"){
  console.log("mooooo") 
}else{
   // 3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    console.log("Hey! You're not a cow.") 
}

//E. Driver's Ed
//1.Make a variable that holds a person's age; be semantic
let age = 1;
if ( age >= 16){
    console.log("Here are the keys!")
}else{
    console.log("Sorry, you're too young.")
}

//II. Loops
//A. The basics
//1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i < 100; i++){
    console.log(i)
}

//2.Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++){
    console.log(i)
}

//3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 400; i += 3){
       console.log(i)
     }

//B. Get even
//1. Print out the numbers that are within the range of 1 - 100
 for(let i = 1; i <= 100; i++){
  //Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
  if(i%2==0){
    console.log(i, "is an even number ");
    //odd Number
  }  else{
    console.log(i)
  } 
}

//C. Give me Five
//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for(let i = 0; i <= 100; i++){
    if( (i % 5) === 0 ){
      console.log("I found a" + ""+ i +". High five!");
    }  else if ( (i % 3 )=== 0 ){
      console.log("I found a" + ""  + i + ". Three is a crowd!");
    } else if((i % 3) === 0 && (i % 5) === 0) {
      console.log("I found a" + ""  + i + ". Three is a crowd!" + "I found a" + ""  + i + ". Three is a crowd!" );
      
    } else{
      console.log(i)
    }
  }

//D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let number1 = 23 ;
let sum = 0;
for(i = 0; i <= 10; i++){
  sum = sum + i;
}
 console.log(sum);

//2.You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
const number2 = 55 ;
let mult = 0;
for(i = 0; i <= 100; i++){
  mult = mult + i*2;
}
console.log(mult);

// III. Arrays & Control flow
//1.What are the things in an array called?
       //An Element

//2.Do Arrays guarantee those things will be in order?
          //No but orderd in index start from 0

//3.What real-life thing could you model with an array?
             //Car in parking lot

             //B. Easy Does It
// 1.Create an array that contains three quotes and store it in a variable called qotes
// const name = [ "Jhon","Mark ","Marta"];
// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true];
// // How do you access the 1st element in the array?
let randomThing = randomThings[0];
// //console.log(randomThing)
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
 console.log(randomThings)

// D. Change values
// Given the following array 
const ourClasses = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
let ourClass = ourClasses[2];
console.log(ourClass)
// Change the value of "Github" to "Octocat"
ourClasses[4] = "Octocat";
// Add a new element, "Cloud City" to the array
let ourClassd = ourClasses.push( "Cloud City");
console.log(ourClasses)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: 
 const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
let myarrr = myArray.push("Aegon","Agonian");
console.log(myArray)
// // Remove the 5from the beginning of the array.
var removed = myArray.splice(0,5);
console.log(myArray)
// Add the string "Bob Marley"to the beginning of the array.
let myArrayy = myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
let myArrayX = myArray.shift();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). 
// Did you mutate the array? 
           //No it doesn't
// What does mutate mean? change 
// Did the .reverse()method return anything?
            //yes, the (reverse()) method reverses the order of the elements in an array.
myArray. reverse()
console.log(myArray)

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
let number4 = 109
if (number4 < 100){
  console.log( "little number" )
}else{
  console.log( "big number" )
}

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let number = 6;
if (number < 5){
  console.log("little number") ;
}
else if (number > 10){
  console.log("big number") ;
}
else{
  console.log(  "monkey") ;
}

//H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
 //1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
let kristynsClosetc = kristynsCloset[2];
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
let kristynsClosetA = kristynsCloset.splice(6,0,"raybans");
 console.log(kristynsCloset)
  //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset)
 //4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);
//5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
//6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);
//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Tom is looking fierce in the ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]} `);
//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
let thomsCloset1 = thomsCloset[1].splice(2,1,"Footie Pajamas");
console.log(thomsCloset);

// IV. Functions
//  A. printGreeting
// 1. Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
let printGreeting = function(str){
	return `Hello there, ${str}!`
}
console.log(printGreeting("Slimer"));

//B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
let printCool = function(name){
	return `${name} is cool`
}
console.log(printCool("Captain Reynolds"));

//C. calculateCube
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
let calculateCube = function (num){
	return num*num*num;
}
console.log(calculateCube(5));

//D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isCharAVowel(character){
  if( (character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u') ||
  (character === 'A') || (character === 'I') || (character === 'E') || (character === '0') || (character === 'U')  ){
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel ("a"));

//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
let getTwoLengths = function(str1,str2){
	let array =  [];
	array.push(str1.length, str2.length)
	return array;
}
console.log(getTwoLengths("house", "food"));

//F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
let getMultipleLengths = function(array){
	let arrayStringLength =  [];
	for (elements of array){
		arrayStringLength.push(elements.length)	
	}
	return arrayStringLength;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G. maxOfThree
//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
const maxOfThree = function(num1, num2, num3) {
  if ((num1 >= num2) && (num1 >= num3)) { 
      return num1;
  } else if ((num2 >= num1) && (num2 >= num3)) {
      return num2;
  } else {
      return num3;
  }
}
console.log(maxOfThree(56,67,45));
console.log(maxOfThree(5,6,5));
console.log(maxOfThree(5,7,45));

//H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const  longestStringInArray = (arr) => {
  let maxLength = 0
  let longestStr;
  arr.forEach((str)=>{
    if(str.length > maxLength ){
      longestStr = str
      maxLength  = str.length
    }
  })
 console.log(`Longest String is ${longestStr} with ${maxLength } character`)
}
longestStringInArray(["bob","cindy","laquisha"])
longestStringInArray(["red","blue","magenta"])
longestStringInArray(["hola","greetings", "howdy"])

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// 1.Create an object called user.
// 2.Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
	name: "walmart",
	email: "email@email.com",
	age: 50,
	purchased: []
};
//B. Update the user
//1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
//2. Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.email = "me@email.com";
user.age =  ++user.age;
console.log(`New Email is : ${user.email}`);
console.log(`New age is :  ${user.age}`);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// 1.  Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Dallas";
console.log(`New location is: ${user.location}`);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
//Console.log just the "Merino jodhpurs" from the purchasedarray.
user.purchased.push("carbohydrates", "peace of mind","Merino jodhpurs" );
console.log( user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
//When we console.log user, we would see the friendobject added to our user object.
//1.Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
	name: "Grace Hopper",
	location: "DC",
	age: 55,
	purchased: []
};
//2.Console.log just the friend's name
console.log(user.friend.name);
//3.Console.log just the friend's location
console.log(user.friend.location);
// 4.CHANGE the friend's age to 55
 user.friend.age = 55;
 console.log(user.friend.age);
//5.The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
//6.The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
 user.friend.purchased.push("The One Ring", "A latte" );
 console.log(user.friend.purchased);
 //7.Console.log just "A latte" from the friend's purchasedarray.
 console.log(user.friend.purchased[1]);

// F. Loops
//1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
// 2.// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// 1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase
const updateUser = () => {
  user.age++;
  user.name.toUpperCase()
};
updateUser(user)
// 2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
const oldAndLoud = (person) => {
  person.age++;
  person.name.toUpperCase()
};
oldAndLoud(user.friend);



// Requirements Complete! Hungry for More?



// Cat Combinator



// 1. Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed



// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)



// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:

// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }

// { name: "Jam", age: 45, breed: "Siamese" }

// This is to demonstrate that functions can take objects as arguments

// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:

// console.log(combineCats(cat1, cat2));
// Result:



// This is to demonstrate that a function can return an object





// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:


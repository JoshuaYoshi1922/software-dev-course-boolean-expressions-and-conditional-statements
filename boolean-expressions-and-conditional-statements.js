/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasWalkingstick = true;
const hasWater = false

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} console.log("But then you think again remember you left the stove on, so you need to get home");
  readline.question("As you walk through the mountains, you see a tree with a door. Do you go in? ('y' or n')");

if (choice === "y" && hasTorch){
  console.log("You open the door that has a map and you take the map.");
} else (choice === "n" && hasmap);{
 console.log("You look at it but it doesnt make sense you leave it.");
 console.log("So you just wander around. Just looking for something.");
 readline.question("As you walk through the big tree, you hear a 'Ding' sound. Do you go find out what it is? ('y' or n')");
}

if (choice === "up" && hasTorch);{
  console.log("You walk to towards the sound and find out its an elevator!")
  readline.question("Do you press 'Up' or 'Down'?");
} if (choice === "down" && !hasMap);{
  console.log("You get on the elevator and it starts going.");
  readline.question("As you walk out of the elevator, you see a car. Do you get in? 'y' or'n'");
}
  if (choice === "y" && hasWalkingstick){
    console.log("You decide to get into the car but no one is in it.");
    console.log("So you steal the car and go home!");
  } else (choice === "n" && hasWater);{
    console.log("Instead of getting in the car, you go back up the elevator instead.")
  }
  

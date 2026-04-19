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

// Random additional items to make the game fun! (true/false)
let sword = Math.random() > 0.5;
let compass = Math.random() > 0.5;
let flashlight = Math.random() > 0.5;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the \'mountains\' or the \'village\'?");

// MOUNTAINS PATH
if (choice === "mountains") {

  console.log("\nYou chose to head towards the mountains.\n");

  // Light conditions
  if (hasTorch && flashlight) {
    console.log("You have plenty of light with your torch and flashlight. You can see everything clearly.\n");
  } else if (hasTorch && !flashlight) {
    console.log("You have some light, thanks to the torch you found! You have just enough light to keep going.\n");
  } else if (!hasTorch && flashlight) {
    console.log("You have some light, thanks to the flashlight you found! You have just enough light to keep going.\n");
  }else {
    console.log("It\’s really dark. You\’re not sure this was a good idea.\n");
  }

  // Wild Animal Observations
  if (sword && (hasTorch || flashlight)) {
    console.log("A bear shows up, but you see it in time and fight it off.\n");
  } else if (sword && !(hasTorch || flashlight)) {
    console.log("You have a sword, but it\’s too dark to use it well against a predator.\n");
  } else if (!sword && (hasTorch || flashlight)) {
    console.log("You spot danger early and avoid it the predator. The bear never noticed you!\n");
  } else {
    console.log("You hear something nearby and run fast in the opposite direction.\n");
  }

  // Directions/Route Management
  if (compass && hasMap) {
    console.log("With both a map and compass, you can navigate through the mountains easily. You've navigated well! Congratulations!\n");
  } else if (compass || !hasMap) {
    console.log("You manage to stay on track most of the time. Thanks to the compass you have. You've navigated well! Congratulations!\n");
  } else if (!compass || hasMap) {
    console.log("You manage to stay on track most of the time. Thanks to the map you have. You've navigated well! Congratulations!\n");
  } else {
    console.log("You’re mostly guessing where to go. Looks like you're going to wait it out for another traveler. \n");
  }

// VILLAGE PATH
} else if (choice === "village") {

  console.log("\nYou decided to travel to the village.\n");

  // Directions/Route Management
  if (hasMap && compass) {
    console.log("You find the village quickly without any trouble. Lucky you!\n");
  } else if (!hasMap || compass) {
    console.log("It takes a while, but you eventually get there thanks to the compass.\n");
  } else if (hasMap || !compass) {
    console.log("It takes a while, but you eventually get there. Good thing you know how to read a map.\n");
  }else {
    console.log("You get lost for a bit, but somehow still make it.\n");
  }

  // Village Observations
  if (flashlight && !hasTorch) {
    console.log("People in the village are curious about your flashlight.\n");
  } else if (hasTorch && !flashlight) {
    console.log("Your torch helps you fit right in with the villagers.\n");
  } else if (hasTorch && flashlight) {
    console.log("You came prepared for anything. Good on you for having a flashlight and a torch. You can never be too prepared!\n");
  } else {
    console.log("You arrive with nothing, but no one seems to mind.\n");
  }

  // Safety
  if (sword) {
    console.log("You feel a bit safer carrying a sword.\n");
  } else {
    console.log("It\’s peaceful enough that you didn\’t need a weapon. Keep your sword away!\n");
  }

// Catch all for user input.
} else {
  console.log("\nThat’s not one of the choices. You stay where you are.\n");
}
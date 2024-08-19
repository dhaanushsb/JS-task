// A player object

var player1;

player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", "));

// Create a second player
var player2 = {
    name: "Arin",
    health: 70,
    place: "The Enchanted Forest",
    items: ["a healing potion", "a magical bow", "a map"]
};

console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", "));



/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item you'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */
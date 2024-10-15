function exercise3 () {
const inventory = [
  // Type 1: Computers
  [
    ["MacBook", 10],     // Item 1: Laptops
    ["Sony-PC", 5]       // Item 2: Desktops
  ],
  // Type 2: Bags
  [
    ["Porter", 30],      // Item 1: Backpacks
    ["Gucci", 20]        // Item 2: Handbags
  ],
  // Type 3: Snacks
  [
    ["Pringles", 8],     // Item 1: Chips
    ["Twix", 40]         // Item 2: Chocolate Bars
  ]
];
console.log("Quantity of MacBook Laptops:", inventory[0][0][1]);  // Output: 10
console.log("Quantity of Gucci Handbags:", inventory[1][1][1]);   // Output: 20
console.log("Quantity of Twix Chocolate Bars:", inventory[2][1][1]);  // Output: 40
}
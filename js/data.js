// Alla rätter på Café Commits meny.
// Varje rätt är ett objekt med samma egenskaper.
const menu = [
  { id: 1, name: "Null-latte", category: "Kaffe", price: 42, vegetarian: true, rating: 4.6, allergens: ["laktos"] },
  { id: 2, name: "Espresso.js", category: "Kaffe", price: 32, vegetarian: true, rating: 4.2, allergens: [] },
  { id: 3, name: "Cappuccino Commit", category: "Kaffe", price: 45, vegetarian: true, rating: 4.8, allergens: ["laktos"] },
  { id: 4, name: "Async Americano", category: "Kaffe", price: 36, vegetarian: true, rating: 3.9, allergens: [] },
  { id: 5, name: "Chai Callback", category: "Te", price: 39, vegetarian: true, rating: 4.4, allergens: ["laktos"] },
  { id: 6, name: "Grönt Git-te", category: "Te", price: 34, vegetarian: true, rating: 3.7, allergens: [] },
  { id: 7, name: "Kanelbulle.js", category: "Bakverk", price: 35, vegetarian: true, rating: 4.9, allergens: ["gluten", "laktos", "ägg"] },
  { id: 8, name: "Merge-muffin", category: "Bakverk", price: 38, vegetarian: true, rating: 4.1, allergens: ["gluten", "ägg"] },
  { id: 9, name: "Cookie Consent", category: "Bakverk", price: 25, vegetarian: true, rating: 4.5, allergens: ["gluten", "nötter"] },
  { id: 10, name: "Semicolon-semla", category: "Bakverk", price: 55, vegetarian: true, rating: 4.7, allergens: ["gluten", "laktos", "nötter"] },
  { id: 11, name: "Debug-dadelboll", category: "Bakverk", price: 28, vegetarian: true, rating: 3.8, allergens: ["nötter"] },
  { id: 12, name: "Hello World-macka", category: "Smörgåsar", price: 69, vegetarian: true, rating: 4.3, allergens: ["gluten", "laktos"] },
  { id: 13, name: "Stack Overflow-toast", category: "Smörgåsar", price: 79, vegetarian: false, rating: 4.6, allergens: ["gluten", "laktos"] },
  { id: 14, name: "Bug-baguette", category: "Smörgåsar", price: 75, vegetarian: false, rating: 4.0, allergens: ["gluten", "ägg"] },
  { id: 15, name: "Wrap 404", category: "Smörgåsar", price: 72, vegetarian: true, rating: 3.6, allergens: ["gluten"] },
  { id: 16, name: "Ice Ice Array", category: "Kalla drycker", price: 44, vegetarian: true, rating: 4.2, allergens: ["laktos"] },
  { id: 17, name: "Booleanbubbel", category: "Kalla drycker", price: 29, vegetarian: true, rating: 3.5, allergens: [] },
  { id: 18, name: "Lemon Loop", category: "Kalla drycker", price: 33, vegetarian: true, rating: 4.4, allergens: [] },
  { id: 19, name: "Test-kaka", category: "Bakverk", price: 40, vegetarian: true, rating: 4.4, allergens: [] },
];


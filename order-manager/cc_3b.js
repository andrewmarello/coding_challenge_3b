console.log(`Hello! This is Coding Challenge 3b - Order Manager - Andrew Marello`);

// Step 2: Model the Inventory
let inventory = [
    {
        sku: "SKU-001",
        name: "Blanket",
        price: 34.99,
        stock: 50
    },
    {
        sku: "SKU-002",
        name: "Pillow",
        price: 19.99,
        stock: 100
    },
    {
        sku: "SKU-003",
        name: "Bed Sheet",
        price: 29.99,
        stock: 75
    },
    {
        sku: "SKU-004",
        name: "Comforter",
        price: 49.99,
        stock: 40
    }
];

inventory.forEach(item => {
    console.log(`${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`);
});

//Step 3: Manage Inventory Changes
inventory.push({
    sku: "SKU-005",
    name: "Mattress",
    price: 499.99,
    stock: 20
});
console.log("Added new item: SKU-005 | Mattress | $499.99 | Stock: 20");
let removedItem = inventory.pop();
console.log(`Removed product: ${removedItem.name}`);

// Step 4: Process Orders
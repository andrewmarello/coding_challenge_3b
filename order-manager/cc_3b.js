console.log(`Hello! This is Coding Challenge 3b - Order Manager - Andrew Marello`);

// Step 2: Model the Inventory
let inventory = [
    { sku: "SKU-001", name: "Blanket", price: 34.99, stock: 50 },
    { sku: "SKU-002", name: "Pillow", price: 19.99, stock: 100 },
    { sku: "SKU-003", name: "Bed Sheet", price: 29.99, stock: 75 },
    { sku: "SKU-004", name: "Comforter", price: 49.99, stock: 40 }
];

inventory.forEach(item => {
    console.log(`${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`);
});

// Step 3: Manage Inventory Changes
inventory.push({ sku: "SKU-005", name: "Mattress", price: 499.99, stock: 20 });
console.log("Added new item: SKU-005 | Mattress | $499.99 | Stock: 20");

let removedItem = inventory.pop();
console.log(`Removed product: ${removedItem.name}`);

inventory[0].price = 24.99; // Blanket sale
console.log(`Updated price for ${inventory[0].name}: $${inventory[0].price}`);

inventory[3].stock += 20; // Comforter restock
console.log(`Updated stock for ${inventory[3].name}: Stock: ${inventory[3].stock}`);

// Step 4: Create and Process Orders
let orders = [
    {
        orderID: "ORDER-001",
        items: [
            { sku: "SKU-001", qty: 10 }, // 10 Blankets
            { sku: "SKU-002", qty: 20 }  // 20 Pillows
        ]
    },
    {
        orderID: "ORDER-002",
        items: [
            { sku: "SKU-003", qty: 80 }  // 80 Bed Sheets (is going to fail))
        ]
    }
];

orders.forEach(order => {
    let canProcess = true;
    let orderTotal = 0;
    let errorMsg = "";

    // Check stock and calculate total
    order.items.forEach(orderItem => {
        let product = inventory.find(inv => inv.sku === orderItem.sku);
        
        if (!product) {
            canProcess = false;
            errorMsg = `SKU ${orderItem.sku} not found`;
        } else if (product.stock < orderItem.qty) {
            canProcess = false;
            errorMsg = `Insufficient stock for ${product.name}`;
        } else {
            orderTotal += product.price * orderItem.qty;
        }
    });

    // Process order if possible
    if (canProcess) {
        order.items.forEach(orderItem => {
            let product = inventory.find(inv => inv.sku === orderItem.sku);
            product.stock -= orderItem.qty;
        });
        console.log(`Order ${order.orderID} processed. Total: $${orderTotal.toFixed(2)}`);
    } else {
        console.log(`Order ${order.orderID} failed: ${errorMsg}`);
    }
});

// Final inventory
console.log("\nInventory after orders:");
inventory.forEach(item => {
    console.log(`${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`);
});

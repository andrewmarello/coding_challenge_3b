# Coding Challenge 3b

Coding Challenge 03b: Order Fulfillment Manager

orders.forEach(order => {
  let canProcess = true; // Flag to check if all items have enough stock
  let total = 0;
  let insufficientItem = "";

  // Check each item in the order
  order.items.forEach(item => {
    const product = inventory.find(p => p.sku === item.sku);
    if (!product) {
      canProcess = false;
      insufficientItem = `SKU ${item.sku} not found in inventory.`;
    } else if (item.qty > inventory.stock) {
      canProcess = false;
      insufficientItem = `Insufficient stock for ${product.name}. Requested: ${item.qty}, Available: ${product.stock}`;
    }
  });

  // Process order if all items have enough stock
  if (canProcess) {
    order.items.forEach(item => {
      const product = inventory.find(p => p.sku === item.sku);
      inventory.stock -= item.qty;
      total += product.price * item.qty;
    });
    console.log(`Order ${order.orderId} processed. Total: $${total.toFixed(2)}`);
  } else {
    console.log(`Order ${order.orderId} could not be processed. ${insufficientItem}`);
  }
});

// Log inventory after orders
console.log("\nInventory after orders:");
inventory.forEach(item => {
  console.log(`${item.sku} | ${item.name} | $${item.price.toFixed(2)} | Stock: ${item.stock}`);
});
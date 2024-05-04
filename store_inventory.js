// build a feature for store inventory
const items = {
    apple: 10,
    banana: 5,
    orange: 7
  };
  
  const exchangeRate = 80;
  
  const itemsInRupees = Object.keys(items).map(item => ({
    [item]: items[item] * exchangeRate
  }));
  
  console.log(itemsInRupees);
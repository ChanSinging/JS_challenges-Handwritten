const shoppingCart = [
	{ name: "Apple", price: 1.99, quantity: 3 },
	{ name: "Apple", price: 1.99, quantity: 3 },
	{ name: "Xiomi", price: 2.99, quantity: 2 },
	{ name: "Samsung", price: 3.99, quantity: 1 },
	{ name: "Tesla", price: 3.99, quantity: 11 },
	{ name: "Tesla", price: 4.99, quantity: 4 },
	{ name: "Nokia", price: 4.99, quantity: 4 }
];

// 使用 reduce 函数将同名商品的条目归类到一起
// const groupedCart = shoppingCart.reduce((result, item) => {
// 	if (!result[item.name]) {
// 	  result[item.name] = [];
// 	}
// 	result[item.name].push(item);
// 	return result;
//   }, {});
  
// console.log(groupedCart);
function getLastCardNumber(totalCards) {
	// 初始化纸牌数组
	const cards = Array.from({ length: totalCards }, (_, index) => index + 1);
  
	let currentIndex = 0; // 当前抽牌位置的索引
  
	while (cards.length > 1) {
	  // 抽取纸牌
	  cards.splice(currentIndex, 1);
	  currentIndex = (currentIndex + 1) % cards.length; // 更新下一次抽牌位置的索引
	}
  
	return cards[0]; // 返回最后一张纸牌的编号
  }
  
  const totalCards = 45;
  const lastCardNumber = getLastCardNumber(totalCards);
  console.log("最后抽取的纸牌编号是:", lastCardNumber);
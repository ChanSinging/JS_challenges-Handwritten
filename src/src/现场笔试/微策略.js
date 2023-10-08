// function cal(s) {
// 	let hashCode = 0;
// 	for (let i = 0; i < s.length; i++) {
// 	  // Convert the character to its ASCII value using charCodeAt()
// 	  let charCode = s.charCodeAt(i);
// 	  // Subtract the ASCII value of 'a' to get the relative position
// 	  let position = charCode - 'a'.charCodeAt(0) + 1;
// 	  // Calculate the hash code by multiplying position with (i + 1)
// 	  hashCode += (i + 1) * position;
// 	}
// 	console.log(hashCode);
// 	// return hashCode
//   }
// cal('xxxw') // 238
// // console.log(cal("x"));
function findDifferentKeys(obj1, obj2) {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	console.log(keys2);
	const differentKeys = new Set();
	// 遍历 obj1 的键
	for (let key of keys1) {
	  // 检查 obj2 是否也有相同的键，并且对应的值不同
	  if (keys2.includes(key) && obj1[key] !== obj2[key]) {
		differentKeys.add(key);
	  }
	}
  
	// 遍历 obj2 的键
	for (let key of keys2) {
	  // 检查 obj1 是否也有相同的键，并且对应的值不同
	  if (keys1.includes(key) && obj2[key] !== obj1[key]) {
		differentKeys.add(key);
	  }
	}
  
	// 将不同的键按字典升序排序
	// differentKeys.sort();
  
	return [...differentKeys];
  }
  
  const json1 = {"hacker":"rank","input":"output"};
  
  const json2 = {"hacker":"ranked","input":"output"}
  
  const result = findDifferentKeys(json1, json2);
  console.log(result); // 输出: ["hi"]
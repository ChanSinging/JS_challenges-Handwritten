function generateCombinations(arrays) {
	const result = [];
  
	function generate(index, current) {
	  if (index === arrays.length) {
		result.push(current.join(''));
		return;
	  }
  
	  for (let i = 0; i < arrays[index].length; i++) {
		const newArray = current.concat(arrays[index][i]);
		generate(index + 1, newArray);
	  }
	}
  
	generate(0, []);
  
	return result;
  }
  
  const input = [[1, 2, 3], [4, 5], [6, 7]];
  const combinations = generateCombinations(input);
  
  const output = combinations.join(' ');
  
  console.log(output);
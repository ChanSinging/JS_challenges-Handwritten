function getArrbyId(id, nodes){
	// 根据fj，输出福建；根据tj，输出福建福州台江
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i].id === id) {
		  return nodes[i].title;
		}
	
		if (nodes[i].children) {
		  const result = getArrbyId(id, nodes[i].children);
		  if (result) {
			return nodes[i].title + result;
		  }
		}
	  }
	
	  return null;

}
const treeNode = [{
	title: '福建',
	id: 'fj',
	children:[
		{
			title: '福州',
			id: 'fz',
			children:[
				{
					title: '台江',
					id: 'tj',
				}
			]
		}
	]
}];
console.log(getArrbyId('tj', treeNode)); // 输出: '福建'


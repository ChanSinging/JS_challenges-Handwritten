function printDOM(node, depth = 0) {
	// 打印节点标签和缩进
	console.log(`${" ".repeat(depth)}${node.tagName}`);
  
	// 遍历子节点
	for (let i = 0; i < node.children.length; i++) {
	  printDOM(node.children[i], depth + 2);
	}
  }
  
  // 在这里调用函数以解析整个文档
  const root = document.documentElement;
  printDOM(root);
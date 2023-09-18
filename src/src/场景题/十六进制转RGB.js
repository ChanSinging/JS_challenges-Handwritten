function hexToRGB(str){
	let strs = str.replace('#', '');
	
	let r = parseInt(strs.substr(0,2), 16);
	let g = parseInt(strs.substr(3,5), 16);
	let b = parseInt(strs.substr(5,7), 16);

	console.log(`R: ${r}, G: ${g}, B: ${b}`);
}
hexToRGB('#FF1020')
// [1,0,1,1,0,0,1,0] 使其改变成[0,0,0,0,1,1,1,1] 零放前面，时间复杂度为O(n),空间复杂度为O(1)
function swap(nums){
	let lastIndex=0;
	for(let i=0;i<nums.length;i++){
		if(nums[i]==1){
			lastIndex++;
		}
	}
	for(let i=0;i<lastIndex;i++){
		nums[i]=0;
	}
	for(let i=nums.length-1;i>0;i--){
		nums[i]=1;
		lastIndex--;
		if(lastIndex==0) break;
	}
	
	console.log(nums);
}
const nums = [1,0,1,1,0,0,1,0]
swap(nums);
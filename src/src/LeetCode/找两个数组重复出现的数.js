function findCopy(nums1, nums2){
	// find same numbers
	let res = []
	nums1.map(li=>{
		if(nums2.indexOf(li)!=-1){
			res.push(li);
		}
	})
	return res;
}
let nums1 = [2,2,3,5]
let nums2 = [1,2,2,2,5]
console.log(findCopy(nums1, nums2));
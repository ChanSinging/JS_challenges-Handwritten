var restoreIpAddresses = function(s) {
    // ip的前导不能是0，
    // dfs实现
    const len = 4;
    const t = new Array(len);
    const ans = [];

    const dfs = (s, i, k) => {
        // dfs
       if(k==0){
           if(i == s.length) {
			   const filteredArray = t.filter((value) => value !== undefined);		 	
               ans.push(filteredArray.join('.'));
               return;
           }
       }
       for(let j=i;j<s.length && j<i+3;j++){
           if(s.charAt(i) === '0' && j>i) return;
           let v = parseInt(s.slice(i, j+1));
           if(v>=0 && v<=255){
			   t.push(s.slice(i, j+1));
               dfs(s, j+1, k-1);
               t.pop();
           }
       }

    }
    dfs(s, 0, 4);
    return ans;
};
let s = "25525511135";
console.log(restoreIpAddresses(s));
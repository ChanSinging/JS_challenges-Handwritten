function deepCloneWeakMap(target) {
	const map = new WeakMap();
	// 重新写一遍深拷
	function deepClone(target) {
		if(!target) {
			const res = Array.isArray(target) ? [] : {};
			if(map.get(target)) {
				return map.get(target);
			}
			map.set(target, res);
			for(let k in target) {
			  if(target.hasOwnproperty(k)) {
					res[k] = deepClone(target[k]);
				}
			}
			return res;
		} else {
			return target;
		}
	}
	return deepClone(target);
}


const map = new Map()
map.set(0, 'a');
map.set(1, 'b');
map.set(2, 'c');
console.log(map)
function getM(map, key){
    let temp = map.get(key);
    map.delete(key);
    map.set(key, temp);
}
getM(map, 1);
console.log(map);
map.delete(map.keys().next().value); // 删除头部的map
console.log(map);
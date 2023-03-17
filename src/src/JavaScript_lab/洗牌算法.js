/**
 * @name: 洗牌算法
 * @author: cxy
 * @date: 2023/2/28 15:26
 * @description：洗牌算法
 * @update: 2023/2/28 15:26
 */
function shuffle (nums) {
    let n = nums.length
    let random = 0
    while (n !== 0) {
        n--
        random = Math.floor(Math.random() * n)
        // 将n和random对换
        let tmp = nums[n]
        nums[n] = nums[random]
        nums[random] = tmp
    }
    return nums
}

let nums = [1, 2, 3, 4, 5, 67, 8, 10]
console.log(shuffle(nums));

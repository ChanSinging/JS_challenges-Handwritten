/**
 * @name: 滴滴_1
 * @author: cxy
 * @date: 2023/3/3 10:26
 * @description：滴滴_1
 * @update: 2023/3/3 10:26
 */
// 实现深拷贝
function deepClone(obj){
    if(obj !==null || typeof obj !== 'object') return
    let newObject = Array.isArray(obj) ? [] : {}
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            newObject[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObject
}
// 手写promise

const PENDING = 'pending'
const RESOlVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(fn) {
    let self = this
    this.state = PENDING
    this.value = null

    this.rejectedCallbacks = []
    this.resolveCallbacks = []

    function reslove(value) {
      if(value instanceof MyPromise) return value.then(reslove, reject)

      setTimeout(()=> {
          // 只有状态pending才执行
          if(self.state === PENDING){
              self.state = RESOlVED
              self.value = value
              self.resolveCallbacks.forEach(callback => {
                  callback(value)
              })
          }
      },0)
    }
    function reject(value) {
        setTimeout(()=>{
            if(self.state === PENDING){
                self.state = REJECTED

                self.value = value
                self.rejectedCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        },0)
    }
    // 将连个方法
    try {
        fn(reslove, reject)
    }catch (e) {
        reject(e)
    }
}


// 二分查找（折半查找
function midSearch(nums, target){
    let left = 0, right = nums.length-1
    while (left<=right){
        // const mid = Math.floor((right-left)/2) + left
        const mid = right + left >> 1
        const nums = nums[mid]
        if(nums === target) return mid
        if(nums > target) right = mid -1
        if(nums < target) left = mid + 1
    }
    return -1
}

const mid = Math.floor((10-1)/2) + 1
const mid2 = 10 + 1 >> 1
console.log(mid, mid2)

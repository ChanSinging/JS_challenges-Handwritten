/**
 * @name: 手写类数组转化成树
 * @author: cxy
 * @date: 2023/2/28 19:18
 * @description：手写类数组转化成树
 * @update: 2023/2/28 19:18
 */
const data = [
    { id: '01', name: '张大', pid: '00', job: '项目经理' },
    { id: '02', name: '小亮', pid: '01', job: '产品leader' },
    { id: '03', name: '小美', pid: '01', job: 'UIleader' },
    { id: '04', name: '老马', pid: '01', job: '技术leader' },
    { id: '05', name: '老王', pid: '01', job: '测试leader' },
    { id: '06', name: '老李', pid: '01', job: '运维leader' },
    { id: '07', name: '小丽', pid: '02', job: '产品经理' },
    { id: '08', name: '大光', pid: '02', job: '产品经理' },
    { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
    { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
    { id: '11', name: '小华', pid: '04', job: '后端工程师' },
    { id: '12', name: '小李', pid: '04', job: '后端工程师' },
    { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
    { id: '14', name: '小强', pid: '05', job: '测试工程师' },
    { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
]

function arr2tree2 (data) {
    let res = []
    if (!Array.isArray(data)) return
    let map = {}
    // id 和item一一对上
    data.forEach(param => {
        map[param.id] = param
    })
    // console.log(map+'pp');
    //开始构建树
    data.forEach(param => {
        let parent = map[param.pid]
        // 如果存在parent
        if(parent){
            (parent.children ||(parent.children=[])).push(param)
        } else {
            res.push(param)
        }
    })
    return res
}

console.log(arr2tree1(data));



function arr2tree1(data) {
    // 重写数组转树
    let res = []
    if(!Array.isArray(data)) return
    let map = {}
    // id 和 name 放入map中
    data.map(param => {
        map[param.id] = param
        })
        data.forEach(param=> {
            // 存放parent
            let parent = map[param.pid]
            if(parent){
                (parent.children || (parent.children=[])).push(param)
        } else {
            res.push(param)
        }
    })
    return res
}
// let nums = [1,2,3,45,6]
// nums.map(item=>{
//     item = item + 1
// })
// console.log(nums)

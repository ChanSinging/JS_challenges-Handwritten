/**
 * @name: 数组转成树状
 * @author: cxy
 * @date: 2023/2/21 19:56
 * @description：数组转成树状
 * @update: 2023/2/21 19:56
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

function arr2tree(data) {
    let res = []
    if(!Array.isArray(data)) return res
    // 使用map，将当前对象的id与当前对象对应起来存储
    let map = {}
    data.forEach(item => {
        map[item.id] = item
    })
    // 开始构建树
    data.forEach(item => {
        let parent = map[item.pid]
        if(parent){
            (parent.children || (parent.children =[])).push(item)
        } else {
            res.push(item)
        }
    })
    return res

}

console.log(arr2tree(data));

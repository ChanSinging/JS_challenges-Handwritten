/**
 * @name: emitter
 * @author: cxy
 * @date: 2023/1/30 21:58
 * @description：emitter
 * @update: 2023/1/30 21:58
 */
// 广播通知事件
function _broadcast (componentName, eventName, params) {
    // 遍历当前组件的子组件
    this.$children.forEach(function (child) {
        // 取出componentName,组件options上面可以自己配置
        const name = child.$options.componentName;
        // 如果找到了需要通知的组件名，触发组件上面的$eimit方法，触发自定义事件
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // 没找到，递归往下找
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

const emiiter = {
    methods: {
        // 派发事件（通知父组件）
        dispatch (componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.componentName;
            // 循环往上层父组件，知道知道组件名和需要触发的组件名相同即可，然后触发对应组件的事件
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        // 广播事件（通知子组件）
        broadcast (componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        },
    },
};

export default emiiter;

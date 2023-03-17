/**
 * @name: test
 * @author: cxy
 * @date: 2023/2/2 10:20
 * @description：test
 * @update: 2023/2/2 10:20
 */
export const hello = '你好，这是在增加 ts-loader 之后增加的第一个 ts 文件'

class Person {
    private name: string;
    constructor (name:string) {
        this.name = name
    }
    sayHi () {
        return 'hi, ' + this.name
    }
}
export const sayHello = (name: string) => {
    let person = new Person(name)
    return person.sayHi()
}
sayHello("chenxingying")

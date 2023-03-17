/**
 * @name: 循环打印红绿灯
 * @author: cxy
 * @date: 2023/2/21 11:32
 * @description：循环打印红绿灯
 * @update: 2023/2/21 11:32
 */
function red () {
    console.log('red')
}

function green () {
    console.log('green')
}

function yellow () {
    console.log('yellow')
}

const task = (timer, light) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') red()
            if (light === 'green') green()
            if (light === 'yellow') yellow()
            resolve()
        }, timer)
    })

// const step = () => {
//     task(3000, 'red')
//         .then(() => task(2000,'green'))
//         .then(() => task(1000,'yellow'))
//         .then(step)
// }
// step()

const taskRunner = async () => {
    await task(3000,'red')
    await task(2000,'green')
    await task(1000,'yellow')
    taskRunner()
}
taskRunner()

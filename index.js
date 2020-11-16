// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(nameArr, event) {
    let arr = []
    for (let i in nameArr) {
        arr.push(`Thank you, ${nameArr[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}
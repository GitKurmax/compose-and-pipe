function addFive(a) {
    return a + 5;
}

function multiplyBy2(a) {
   return a * 2;
}

function createObject(a) {
    return {yourValue: a}
}

function composeFunctions(...fn) {
    return fn.reduce(compose)
}

function pipeFunctions(...fn) {
    return fn.reduce(pipe)
}

function compose(acc, current) {
    return (arg) => acc(current(arg))
}
function pipe(acc, current) {
    return (arg) => current(acc(arg))
}

console.log('pipe - ',
    pipeFunctions(
        addFive,
        multiplyBy2,
        createObject,
    )(5)
)

console.log( 'compose - ',
    composeFunctions(
        createObject,
        multiplyBy2,
        addFive,
    )(5)
)

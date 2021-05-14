let a = 77
let book = "A byte of python"
export {a, book}

export default class {
    constructor(){
        console.log("импортированныйй класс из модуля");
    }
}

function run() {
    console.log("экспортируемая функция");
}

function sum(x, y) {
    console.log(x + y);
}
export {sum, run}

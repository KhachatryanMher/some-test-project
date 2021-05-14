import Article from "./article"
import $ from "jquery"
import css from "./style.css"
global.css = css

global.$ = $
// console.log($("#app"));
let article = new Article({
    head : "Microsoft выпустила обновления Windows 7 и 8.1",
    description : "Компания Microsoft выпустила обновление операционной системы Windows 7, чья поддержка закончилась более года назад."
})

article.render()


import * as test from "./classes"

test.run()
test.sum(5, 5)

console.log(test.a);
console.log(test.book);

import Just from "./classes"
new Just()
/*
import {run, sum} from "./classes"
run()
sum(2, 9)




import {a, book} from "./classes"

console.log(a);
console.log(book);
*/
import { everythingFn } from "./all.js"
import { exchange } from "./cf.js"
import { deleteFn } from "./delete.js"
import { findFn } from "./find.js"
import { minmax } from "./minmax.js"
import { sorting } from "./sort.js"

document.addEventListener('DOMContentLoaded', () => {
    sorting()
    exchange()
    minmax([3,8,11,23],false)
    findFn([
        {name: 'apples', quantity: 2, age:40},
        {name: 'bananas', quantity: 0,age:5},
        {name: 'cherries', quantity: 5, age:22}
      ]
      )
      deleteFn([2,8,9,3,63,7,22,36],3)
      everythingFn()
})
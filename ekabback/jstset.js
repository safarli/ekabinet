
let mylist = ['alma', 'armud', 'heyva', { hello: 'salam' }, undefined, undefined, null, 0]

// for (let item in mylist) {
//     console.log(item)
// }

// console.log(Object.getOwnPropertyDescriptors(mylist));

Object.defineProperty(mylist, 'PROPERTY_X', {
    enumerable: true,
    value: 'VALUE_X'
})

for (let item in mylist) {
    console.log(item);
}

// console.log(Object.getOwnPropertyDescriptors(mylist))

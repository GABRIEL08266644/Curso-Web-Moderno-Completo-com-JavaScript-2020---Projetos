let compraraThis = function (param) {
    console.log(this === param)
}
compraraThis(global)

const obj = {}
compraraThis = compraraThis.bind(obj)
compraraThis(global)
compraraThis(obj)

let compraraThisArrow = param => console.log(this === param)
compraraThisArrow(global)
compraraThisArrow(module.exports)

compraraThisArrow = compraraThisArrow.bind(obj)
compraraThisArrow(obj)
compraraThisArrow(module.exports)
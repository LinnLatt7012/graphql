// const { db : { products }} = require("../db") 
const { fliterFunc } = require("./common")
exports.Category ={
    products: ({id},{filter},{ products,reviews })=>{
        // console.log(parent); output { id: 'c01b1ff4-f894-4ef2-b27a-22aacc2fca70', name: 'Kitchen' }
        let CategoryFiltered =products.filter(product => product.categoryId===id);
       
        return  fliterFunc(filter,CategoryFiltered,reviews);
    }
}
// const { db : { categories,products }} = require("../db")
const { fliterFunc } = require("./common")
exports.Query ={
    hello: ()=>{
        return ["Wold!","Hi","Fine"]
    },
    products:(parents, { filter } ,{products,reviews})=>{
        // let filteredProducts = products;
       
        return fliterFunc(filter,products,reviews);
    },
    product:(parents, args,context)=>{
        const { products } = context;
        const { id } = args;
        return products.find(product => product.id===id);
    },
    categories:(parents, args,context)=>{
        return context.categories
    },
    category:(parents, args,context)=>{
        const { categories } = context;
        const { id } = args;
        return  categories.find( category=>  category.id=== id);
    }
}
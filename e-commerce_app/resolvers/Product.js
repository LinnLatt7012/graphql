// const { db : { categories }} = require("../db")

exports.Product={
    category: (parent,args,{ categories })=>{
        const catId = parent.categoryId; 
        return  categories.find( category=>  category.id=== catId);
    },
    reviews:(parent,args,{reviews})=>{
        const { id } = parent;
        return reviews.filter(review=> review.productId === id);
    }
}
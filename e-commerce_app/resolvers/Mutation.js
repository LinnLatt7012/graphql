const { v4:uuid} = require('uuid')
exports.Mutation={
    addCategory:(parent,{input:{name}},{categories})=>{
        const newCategory ={
            id:uuid(),
            name
        }
        categories.push(newCategory);

        return newCategory;
    },
    addProduct:(parent,{input},{products})=>{
        const{
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId,
        }=input;
        const newProduct={
            id:uuid(),
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        }
        products.push(newProduct)
        return newProduct;
    },
    addReview:(parent,{input},{reviews})=>{
        const {
        date,
        title,
        comment,
        rating,
        productId
        } = input;
        const newReview={
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }
        reviews.push(newReview)
        return newReview;

    }
}
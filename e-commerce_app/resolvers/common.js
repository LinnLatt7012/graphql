exports.fliterFunc=(filter,products,reviews)=>{
    let filteredProducts = products;
        if(filter){
            if(filter.onSale){
                filteredProducts = filteredProducts.filter(product=> product.onSale == filter.onSale)
            }
            if([1,2,3,4,5].includes(filter.rating)){
                filteredProducts = filteredProducts.filter(
                    product=> {
                        let i=0;
                        let total=0
                        reviews.forEach(review=>{
                            if(review.productId === product.id){
                                i++;
                                total += review.rating;
                            }
                        })
                        console.log((total/i));
                        return parseFloat(filter.rating) <= (total/i);
                    }
                )
            }else{
                return [];
            }
        }
        return filteredProducts;
}
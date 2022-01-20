const { gql } = require("apollo-server");

exports.typeDefs =  gql`
type Query{
    hello: [String]
    products(filter:ProductsFilterInput):[Product!]!
    product(id: ID!):Product
    categories:[Category!]!
    category(id: ID!):Category
},
type Mutation{
    addCategory(input:addCategoryInput):Category!
    addProduct(input:addProductInput):Product!
    addReview(input:addReviewInput):Review!
},
type Product {
    id:ID
    name:String!
    description:String!
    quantity: Int!
    image:String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews:[Review!]!
},
type Category {
    id:ID!
    name: String!
    products(filter:ProductsFilterInput): [Product!]!
},
type Review{
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
    productId: String!
},
input ProductsFilterInput{
    onSale:Boolean,
    rating:Int,
},
input addCategoryInput{
    name:String!
},
input addProductInput{
    name:String!
    description:String!
    quantity: Int!
    image:String!
    price: Float!
    onSale: Boolean!,
    categoryId:String
},
input addReviewInput{
    date: String
    title: String
    comment: String
    rating: Int
    productId: String!
}
`
const { ApolloServer, gql} = require("apollo-server");
const { products } = require("./intialdata")

const typeDefs = gql`
    type Query{
        hello: [String]
        products:[Product!]!
        product(id: ID!):Product
    },
    type Product {
        id:ID
        name:String!
        description:String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`
const resolvers = {
    Query:{
        hello: ()=>{
            return ["Wold!","Hi","Fine"]
        },
        products:()=>{
            return products
        },
        product:(parents, args,context)=>{
            const productId = args.id;

            const product= products.find(product => product.id===productId);
            return product;
        }

    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
}
);
server.listen().then(({url})=>{
    console.log("Server is ready at "+ url);
})
const { Category } = require("./Category")
const { Product } = require("./Product")
const { Query } = require("./Query")
const { Mutation } = require('./Mutation')
exports.resolvers= {
    Category,
    Product,
    Query,
    Mutation
}
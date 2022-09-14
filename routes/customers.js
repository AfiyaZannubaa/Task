
const { fetchOrders, getOrder } = require("../controllers/Orders")
const Order = require("../controllers/Orders")
const customer = require('../controllers/customers')
const {register} = require("../controllers/customers")
const { update } = require("../models/customer")
const Products = require("../controllers/Products")
const Product = require("../models/Products")
const { createProduct } = require("../controllers/Products")


//Using a plugin

async function customerRoute(fastify,opts){

    fastify.route({
        method: "POST",
        url: "/customers/register",
        handler: customer.register
    })

    fastify.route({
        method: "POST",
        url: "/customers/login",
        handler: customer.login
    })

    fastify.route({
        method: "POST",
        url: "/customers/:id",
        handler: customer.register
    })

    fastify.route({
        method: "GET",
        url: "/customers",
        handler: customer.fetch
    })

    fastify.route({
        method: "GET",
        url: "/customers/:id",
        handler: customer.get
    })

    fastify.route({
        method: "GET",
        url: "/customers/:id/delete",
        handler: customer.delete
    })

    fastify.route({
        method: "GET",
        url: "/orders",
        handler: Order.fetchOrders
    })

    fastify.route({
        method: "GET",
        url: "/orders/:id",
        handler: Order.getOrder
    })

    fastify.route({
        method: "POST",
        url: "/orders/:id/customer",
        handler: Order.createOrder

    })

    fastify.route({
        method: "PUT",
        url: "/order/:id/status",
        handler: Order.updateOrderStatus

    })

    fastify.route({
        method: "DELETE",
        url: "/order/:id",
        handler: Order.deleteOrder
    })

    fastify.route({
        method: "GET",
        url: "/updatePassword/:id",
        handler: customer.updatePassword
    })

    fastify.route({
        method: "PUT",
        url: "/edit/:id",
        handler: Order.update
    })

    fastify.route({
        method: "POST",
        url: "/product",
        handler: Products.createProduct
    })

    fastify.route({
        method: "GET",
        url: "/createProduct",
        handler: Products.fetchProducts
    })

    fastify.route({
        method: "DELETE",
        url: "/deleteProduct/:id",
        handler: Products.deleteProduct
    })
    
    fastify.route({
        method: "PUT",
        url: "/editProduct/:id",
        handler: Products.update
    })

}

module.exports = customerRoute
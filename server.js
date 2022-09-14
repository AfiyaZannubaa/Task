const fastify = require('fastify')({logger: true})
const mongoose = require("mongoose")



const PORT = 5000


fastify.register (require('@fastify/cors'),{origin: '*'})


try{
    mongoose.connect("mongodb://127.0.0.1:27017/test")
}
catch(e) {
    console.log(e)
}



fastify.register(require("./routes/customers"))




const start = async () => {
    try{
       await fastify.listen(PORT)
    }catch(error) {
        fastify.log.error(error)
        process.exit(1)

    }
}

start()
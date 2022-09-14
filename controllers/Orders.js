const e = require("cors");
const Order = require("../models/order");

module.exports = {
    fetchOrders: async function (req,res) {
        try{
            const orders = await Order.find();
            res.status(200).send(orders);

        }catch(e){
            res.status(500).send(e)
        }
    },

    getOrder: async function (req,res){
        try{
            const order = await Order.find({userId: req.params.id});
            if(order){
                res.status(200).send(order)
            }else{
                res.status(404).send({message: "Order not found"})
            }
            

        }catch(e){
            res.status(500).send(e)
        }
    },

    createOrder: async function(req,res){
        try{
            let payload = req.body;
            payload.userId = req.params.id;
            const order = new Order(payload);
            await order.save();
            res.status(200).send(order);
        }catch(e){
            res.status(500).send(e)
        }
    },

  
    updateOrderStatus: async function(req,res){
        try{
            const order = await Order.findById(req.params.id);
            if(order){
                order.orderStatus = req.body.orderStatus;
                await order.save();
                res.status(200).send(order);

            }else{
                res.status(404).send({ message: "order not found"})
            }

        }catch(e){
            res.status(500).send(e);
        }
    },

    deleteOrder: async function (req,res) {
        try{
            const order = await Order.findById(req.params.id);
            if(order){
                await order.remove();
                res.status(200).send({message: "Order deleted successfully"});
            } else{
                res.status(404).send({message: "order not found"});
            }

        }catch{
           res.status(500).send(e) 
        }
    },

    update: async function (req,res) {
        try{
            const order = await Order.findByIdAndUpdate(req.params.id,{
                orderStatus: req.body.orderStatus
            });
            await order.save();
            res.status(200).send({message: "Order updatedsuccessfully"});
        }
    catch{
        res.status(500).send(e) 
     }
    }
};
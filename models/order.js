const mongoose = require('mongoose')

const{Schema, model} = mongoose

const productSchema = new Schema({
    productName: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    productQuantity: {
      type: Number,
      required: true,
    },

    productTotal: {
      type: Number,
      required: true,
    },
  })

const OrderSchema = new Schema({
    
    
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        orderItems: [String],
        
        orderStatus: {
            type: String,
            default: 'created',
            required: true
        },

        totalPrice: {
            type: Number,
            required: true
        },

        product: [productSchema],
   
});

const Order = model("Order", OrderSchema);

module.exports = Order;

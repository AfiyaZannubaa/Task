
const Product = require("../models/Products");
const product = require("../models/Products");

const Products = {

  update: async function (req,res) {
    try{
        const productss = await product.findOneAndUpdate (req.params.id,{
          productName: req.body.productName
        });
        await productss.save();
        res.status(200).send({message: "Product Name updatedsuccessfully"});
    }
catch(e){
    res.status(500).send(e) 
 }
},



  deleteProduct: async function (req, reply) {
    try {
      let id = req.params.id;
      let data = await product.findOneAndDelete({_id:id});
      return reply.send({ data, message: "Product deleted successfully !" });
    } catch (e) {
      return reply.send(e);
    }
  },

  fetchProducts: async function (req,res) {
    try{
        const products = await product.find();
        res.status(200).send(products);

    }catch(e){
        res.status(500).send(e)
    }
},

  createProduct: async function (req, reply) {
    try {
      let check = await product.count({ username: req.body.username });
      console.log(check)
      if (check) {
        return reply.send({
          success: false,
          message: `${req.body.username} exists !`,
        });
      } else {
        let data = new product(req.body);
        await data.save();
        return reply.send({
          data,
          success: true,
          message: `${req.body.username} succcessfully added !`,
        });
      }
    } catch (err) {
      return reply.send(err);
    }
  },
  get: async function (req, reply) {
    try {
      let { id } = req.params;
      let data = await product.findById(id);
      return reply.send(data);
    } catch (e) {
      return reply.send(e);
    }
  },
  // update: async function (req, reply) {
  //   try {
  //     let { id } = req.params;
  //     let data = await product.findByIdAndUpdate(id, {
  //       name: req.body.name,
  //       price: req.body.price,
  //       status: req.body.status,
  //     });
  //     return reply.send({ data, message: "Product updated successfully !" });
  //   } catch (e) {
  //     return reply.send(e);
  //   }
  // },
 
};
module.exports = Products;
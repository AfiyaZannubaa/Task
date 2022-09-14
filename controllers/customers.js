//importing the model here
const User = require('../models/customer')
const bcrypt = require("bcrypt");



module.exports = {
    fetch: async function(req, res){
        let fetchData = await User.find()
//    customerModel.find().then((fetchData)=>{
//       res.send(fetchData)
//   })

        return res.send(fetchData)
    },

//  Getting data through params using id
    get: async function(req, res){
        let id = req.params.id
        let data = await User.findOne({_id: id})
        return res.send(data)
    },

    delete: async function(req, res){
        let id = req.params.id
        let data = await User.findByIdAndDelete(id)
        return res.send(data)
    },
//bcrypt is used for encrypting the password
    register: async function (req,res) {
        try{
            let payload = req.body;
            payload.password = await bcrypt.hash(payload.password, 5);
            
        const user = new User(req.body);
           await user.save();
//          Password should not be send back to enduser and it should not be shown.
          const {password, ...rest} = user.toObject();
            res.status(200).send({message: "user created successfully",
            user: rest});

        }catch(e){
            res.status(500).send(e);
        }
    },

    //Logging using email and password! 
    //Pass the email and password and send with http://localhost:5000/customers/login/

    login: async function (req, res) {
        try{
            const user = await User.findOne({email: req.body.email});
            if(user){
                const check = await bcrypt.compare(req.body.password, 
                    user.password);
                if(check){
                    const {password, ...rest} = user.toObject();
                    res.send({message: "user logged in successfully", user:rest});
                }else{
                    res.status(401).send({message: "Invalid password"});
                }
            
            }else{
                res.status(401).send({ message: "User doesn't exist"})
            }
            

        }catch(e){
            res.status(500).send(e);
        }
    },
    
    updatePassword: async function (req,res){
        const user = await User.findById(req.params.id);
        if (user) {
            user.password = await bcrypt.hash(user.password, 10);
            await user.save();
            res.status(200).send({message: "Password uppdated successfully"});

        }else{
            res.status(404).send({message: "User not found"})
        }
    }

    



    
};


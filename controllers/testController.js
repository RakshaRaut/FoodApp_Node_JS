const userModel = require("../models/userModel");

const testUserController = (req, res) => {
    try{
        res.status(200).send("<h1>Welcome to Hamro Bhansa </h1>");
    } catch (error) {
        console.log("Error in testUserController", error);
    }
};

// LOGIN
const loginController = async (req,res) => {
    try{
        const {email,password} = req.body
        // validification
        if(!email || !password){
         return res.status(500).send({
            success: false,
            message:'Please provide email or password'
         })   
        }
        // check user
        const user = await userModel.findOne({email: email, password: password})
        if(!user){
            return res.status(404).send({
                success:false,
                message: 'User Not Found OR Password MisMatch'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            user,
        })
    } catch(error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:'Error In Login API',message: 'Error In Login API',
            error
        })
    }
};

module.exports = { testUserController, loginController };
// import User from '../models/user';

// exports.register = async(req,res)=>{
//     try{
//         const {username , email , password } = req.body;
//         const newUser = new User({username , email , password})
//         await newUser.save();
//     }
//     catch(error ){
//         console.error(error);
//         res.status(500).json({message: error.message});
//     }
// }

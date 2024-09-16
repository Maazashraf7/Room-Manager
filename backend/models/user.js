const mongoose=require ("mongoose");
// schema design
const userSchema =new mongoose.Schema({
	email:{
		type:String,
		required:true,
		unique:true,
	},
	password:{
		type:String,
		required:{true:"password is required"}
	}
},
{timestamps:true}
);

// export 
const user = mongoose.model("user",userSchema)
module.exports =user
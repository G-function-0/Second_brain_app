import mongoose, {model, Schema} from "mongoose"
mongoose.connect("mongodb+srv://genius:genius@cluster0.e4c4jbq.mongodb.net/");

const UserSchema = new Schema({
    username: {type: String, unique:true},
    password : String,
})

const ContentSchema = new Schema({
    
    type:String,
    link:String,
    userId:{type:mongoose.Types.ObjectId, ref:'User',required: true},
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}]
})


export const ContentModel = model("content",ContentSchema)
export const UserModel = model("User",UserSchema);
import mongoose from "mongoose";
const{Schema,model}=mongoose;

const postSch=new Schema(
{
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    quantity:{
        type: Int,
        required:true
    }

    
},
{
    timestamps:true
});
export default model("game",gameSch);
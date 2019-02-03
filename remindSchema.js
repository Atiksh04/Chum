import mongoose from "mongoose";

const Schema = mongoose.Schema;
 
 
export const remindSchema=new Schema({
	
	comment:String,
	date:{type:Date,default:Date.now()}
}) ;
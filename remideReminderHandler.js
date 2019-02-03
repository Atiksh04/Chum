import moment from "moment";
import mongoose  from "mongoose";
import {remindSchema} from './remindSchema.js';


export function reminder(value){
	var time=moment().format();
	var currentTime=time.split("T");
	console.log(currentTime);

	const rresult = mongoose.model('User_remind_data',remindSchema);
	rresult.findById({_id:value},(err,res)=>{
		if (err) {console.log("finding errr");}
		else
			console.log("done");
		});
}
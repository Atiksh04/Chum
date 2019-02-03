import mongoose from "mongoose";
import {remindSchema} from './remindSchema.js';
import {reminder}from "./remideReminderHandler.js";
import momemt from "momemt";

var id;
var text="message saved";

const rremind = mongoose.model('User_remind_data',remindSchema);
export function mremind(comment){
	
	
		let hello=new rremind({comment:comment});
		hello.save((err,res)=>{
			if (err) {console.log("err in save");}
			else
				{console.log(res._id);
					var id=res._id;
				}
				
		});

		setTimeout(()=>{console.log('after timeput' + id)},1000);
		
	
}


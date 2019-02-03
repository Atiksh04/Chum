import {mremind} from "./remindSaveHandler.js";
import {reminder}from "./remideReminderHandler.js";

export function divide(message)
{
	console.log(message);
	var text=message.text;
	var c=text.split(' ');
	const rtext='not a valid statement';
	console.log(c);
	if (c[0]==="chum"||c[0]==="Chum") 
	{ 	console.log('inside classifier');
	 	if (c[1]==="remind") {
	 		var ctext=mremind(c);
	 	}
	 return ctext;
	}
	else return rtext;
}

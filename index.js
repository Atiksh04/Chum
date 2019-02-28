import express from "express";
import {RTMClient} from "@slack/client";//RTMCLient is the object thru which we use the RTM apl
import {divide} from "./handleMessage.js";
import mongoose from "mongoose";
const app = express();


mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost/bot",{useNewUrlParser:true});


const botToken="xoxb-386040265172-386408602661-jZIlhKnU8W3C04Y7Fn4yiQNw";

const rtm = new RTMClient(botToken);
rtm.start();

rtm.on('message',(userMessage,err)=>{
	if(err) {console.log(err);}
	const resultMessage=divide(userMessage);
	var channel=userMessage.channel;
	rtm.sendTyping(channel);
	rtm.sendMessage(resultMessage,channel);
})

app.listen(3000,()=>{
	console.log(`chum started`);
})

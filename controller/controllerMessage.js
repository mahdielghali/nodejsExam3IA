var mongoose = require("mongoose")
var messageModel = require("../models/message")

const addMessage = async (req,res)=>{
    try {
        const 
        {pseudo,
            content
        } = req.body
         messages = new messageModel({
            pseudo:pseudo,
            content:content,
            likes:0
        })
        await messages.save()
        return res.redirect('/messageList');
    } catch (error) {
        res.send("ero")
    }
}

const showAllMessages = async (req,res) =>{
    try {
        const allMessages = await messageModel.find()
        res.render("listMessage.twig",{"messages":allMessages})
    } catch (error) {
        res.send("erero")
    }
}

const addLikes = async (req,res)=>{
    try {
        const id = req.params.id;
        
        message = await messageModel.findByIdAndUpdate({_id :id}, {$inc : {'likes' : 1}})
        return res.redirect('/messageList');
    } catch (error) {
        res.send("error")
        
    }
}

const getUpdatedPage = async (req,res)=>{
    try {
        const id = req.params.id;
        
        message = await messageModel.findById(id)
        return res.render("editPage.twig",{"message":message})
    } catch (error) {
        res.send("error")
        
    }
}

const updatePage = async(req,res)=>{
    try {
        const {pseudo, content, id} = req.body
        message = await messageModel.findByIdAndUpdate({_id:id},{
            pseudo:pseudo,
            content:content
        })
        return res.redirect('/messageList');
    } catch (error) {
        res.send("error")
        
    }
}

const deletePage =async(req,res)=>{
    try {
        const id = req.params.id;
        message = await messageModel.deleteOne({_id:id});
        return res.redirect('/messageList');
    } catch (error) {
        res.send("error")
        
    }
}

module.exports = {addMessage,showAllMessages,addLikes,getUpdatedPage,updatePage,deletePage}
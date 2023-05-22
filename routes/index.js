var express = require('express');
var router = express.Router();
var { addMessage,showAllMessages,addLikes,getUpdatedPage, updatePage,deletePage} = require("../controller/controllerMessage");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addPage.twig');
  // res.sendfile('addPage');
});

router.get('/messageList',showAllMessages);

router.post('/addMessage',addMessage);

router.get('/like/:id',addLikes);

router.get('/updateMessage/:id',getUpdatedPage);

router.post('/updateMessagePage',updatePage);

router.get('/deleteMessage/:id',deletePage);
router.get('/chat',function(req,res){
  res.render("chat.twig")
});



module.exports = router;

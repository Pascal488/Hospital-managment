var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');

var router = express.Router();
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
    
    res.render ('apointiment.ejs');
});

router.post('/',function(req,res){

    var message = req.body.message;
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;

    db.postappointiment(message,name,email,subject,function(err,result){
        console.log(err);
        res.redirect('back');
        //res.render('success',{data: req.body});
    });

});



module.exports = router;
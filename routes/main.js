var express = require('express');
var router = express.Router();
var http = require("http");
var url = require("url");

var host = "localhost";
var port = "8080";

/* GET home page. */
router.get('/:api', function(req, res, next) {

    var api = req.params.api;
    console.log("get:"+api);
    if (api=='a'){
        var request = http.get({
            host:host,
            path:'/test/user?name=helios',
            port:port},function(res2){
            res2.setEncoding('utf-8');
            res2.on('data',function(data){
                console.log('服务端相应回来的数据为：'+data);
                res.render('a', { abc: data });
            })
        });
    }else {
        res.render('a', { abc: 'aaa' });
    }
});
/* POST home page. */
router.post('/:api', function(req, res, next) {

    var api = req.params.api;
    console.log("post:"+api);
    if (api=='a'){
        res.render('a', { abc: 'Express' });
    }else if (api=='b'){
        res.render('a', { abc: 'bbbbbbbbbbsssssssssssbbb' });
    }

});


module.exports = router;
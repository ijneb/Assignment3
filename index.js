var express = require("express");
var app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.listen(3000, function() {
    console.log(`API is running on http://localhost:3000`)
})


app.get('/', function(req, res) {
    res.status(200);
});


app.get('/bmi/:weight/:height', function(req, res){
    const weight = req.params.weight;
    const height = req.params.height;
    if (isNaN(weight) || isNaN(height))
    {
        res.status(400)
        res.json({error: "bad request"});
        return;
    }
    const result = 10000 * (weight / Math.pow(height, 2));
    console.log("/bmi  request has been made...");
    res.json({"bmi" : result});
})


app.get('/idealweight/:gender/:height', function(req, res){
    const gender = req.params.gender;
    const height = req.params.height;
    if (isNaN(height))
    {
        res.status(400)
        res.json({error: "bad request"});
        return;
    }
    if (gender.toLowerCase() === "male") {
        const result = 50 + (.91 * (height - 152.4));
        console.log("/idealweight  request has been made...");
        res.json({"idealweight" : result});
    } else if (gender.toLowerCase() === "female") {
        const result = 45.5 + (.91 * (height - 152.4));
        console.log("/idealweight  request has been made...");
        res.json({"idealweight" : result})
    } else {
        res.status(400)
        res.json({error: "bad request"});
        return;
    }
})


app.get('/intocm/:height', function(req, res){
    const height = req.params.height
    if (isNaN(height))
    {
        res.status(400)
        res.json({error: "bad request"});
        return;
    }
    const result = height * 2.54;
    console.log("/intocm  request has been made...");
    res.json({"intocm" : result});
})


app.get('/lbstokg/:weight', function(req, res){
    const weight = req.params.weight;
    if (isNaN(weight))
    {
        res.status(400)
        res.json({error: "bad request"});
        return;
    }
    const result = weight / 2.2046;
    console.log("/lbstokg  request has been made...");
    res.json({"lbstokg" : result});
})  
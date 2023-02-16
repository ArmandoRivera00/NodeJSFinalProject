import express from 'express';
import User from "../models/user.model.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/login", {title: "Home Page", message: ""})
    //logic
})

router.get("/login", (req, res) =>{
    res.render("Pages/Login", {title: "Login", message: ""})
    //logic
})

router.get("/register", (req, res) => {
    res.render("pages/register", {title: "Register"})
})

router.post('/login', (req, res) => {
    //logic
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then((user) => {
        
        res.render("pages/index", {user: user, title: "Home Page"})
    }).catch((err) => {
        res.render("pages/login", { message: err, title: "Login"})
        console.log(err);
    })
});

router.post('/register', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then((user) => {
        if(user) res.render("pages/login" , {message: "This email address is already in use"});
        else{

        

        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then((user) => {
            
            res.render("pages/login", { message: "", title: ""})

        }).catch((err) => {
            console.log(err);
            //logic
        })
        }
        //logic
    }).catch((err) => {
        //logic
        console.log(err);
    })
    //logic
});


export default router;
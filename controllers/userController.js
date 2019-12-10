const key = require('../auth/secretKey');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    getUser: async (req, res) => {
        console.log("back userN "+req.body.userName);
        
        const userName = req.body.userName;
        await User.findOne({userName: userName})
        .then(User => {
            if (!User) {
                res.send({message: 'El usuario no existe.'})
            } else {
                if (bcrypt.compareSync(req.body.password, User.password)) {
                // if (User.password === req.body.password) {
                    const payload = {
                        id: User._id,
                        userName: User.userName
                    }
                    const options = {expiresIn: '2592000'}
                    jwt.sign(
                        payload,
                        key.secretOrKey,
                        options,
                        (error, token) => {
                            console.log(token);
                            
                            if (error) {
                                res.json({
                                    success: false,
                                    token: 'There was an error'
                                })
                            } else {
                                res.json({
                                    success: true,
                                    token: token,
                                    user: {
                                        firstName: User.firstName,
                                        lastName: User.lastName,
                                        email: User.email
                                    }
                                })
                            }
                        }
                    )
                }
            }
        })
        .catch(error => res.json(error))
    },
    addUser: async(req, res) => {

        console.log(req.body.userName);
        console.log(req.body.email);
        console.log(req.body.lastName);
        console.log(req.body.password);
        
        var userName = req.body.userName;
        await User.findOne({userName: userName})
        .then(User => {
            if(User)
                res.send({
                    message: 'User already exists',
                    success: false
                })
            
        }).catch()
        var email = req.body.email;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var country = req.body.country;
        
        var password = await new Promise((resolve, reject) => {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })

        const newUser = new User({
            userName: userName,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            country: country
        })

        await newUser.save()
        .catch(error => res.json(error));
            
        res.json({
            message: "User Saved",
            success: true
        });
    }
}

module.exports = userController;

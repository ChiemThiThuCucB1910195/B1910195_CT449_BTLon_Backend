const Account = require("../models/accounts");
const fs = require("fs");

module.exports = class API {
    // fetch all posts
    static async getAllAccount(req, res) {
        const email = req.query.email;
        const password = req.query.password;
        try { 
            if( email && password){
                const account = await Account.find({
                    email: { $regex: new RegExp(email), $options: "i" },
                    password: { $regex: new RegExp(password), $options: "i" },
                });
                res.status(200).json(account);
            }else{
                const accounts = await Account.find();
                res.status(200).json(accounts);
            }
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch posts by id
    static async getAccountByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Account.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // create a post
    static async createAccount(req, res) {
        const post = req.body;

        try {
            await Account.create(post);
            res.status(201).json({ message: "Post created successfully!" });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // update a post
    static async updateAccount(req, res) {
        const id = req.params.id;
        const newPost = req.body;

        try {
            await Account.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post updated successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // delete a post
    static async deleteAccount(req, res) {
        const id = req.params.id;
        try {
            const result = await Account.findByIdAndDelete(id);
            res.status(200).json({ message: "Post deleted successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
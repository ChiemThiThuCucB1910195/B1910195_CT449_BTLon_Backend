const Product = require("../models/products");
const fs = require("fs");

module.exports = class API {
    // fetch all posts
    static async getAllProduct(req, res) {
        try {
            const posts = await Product.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch posts by id
    static async getProductByID(req, res) {
        const id = req.params.id;
        try {
        const post = await Product.findById(id);
        res.status(200).json(post);
        } catch (err) {
        res.status(404).json({ message: err.message });
        }
    }
    // create a post
    static async createProduct(req, res) {
        const post = req.body;
        try {
            const imagename = req.file.filename;
            post.image = imagename;
            await Product.create(post);
            res.status(201).json({ message: "Post created successfully!" });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // update a post
    static async updateProduct(req, res) {
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
        try {
            fs.unlinkSync("./uploads/" + req.body.old_image);
        } catch (err) {
            console.log(err);
        }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;

        try {
            await Product.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post updated successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // detele a post
    static async deleteProduct(req, res) {
        const id = req.params.id;
        try {
        const result = await Product.findByIdAndDelete(id);
        if (result.image != "") {
            try {
            fs.unlinkSync("./uploads/" + result.image);
            } catch (err) {
            console.log(err);
            }
        }
        res.status(200).json({ message: "Post deleted successfully!" });
        } catch (err) {
        res.status(404).json({ message: err.message });
        }
    }
};

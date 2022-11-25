const Category = require("../models/category");
const fs = require("fs");

module.exports = class API {
    // fetch all posts
    static async getAllCategory(req, res) {
        try {
            const posts = await Category.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch posts by id
    static async getCategoryByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Category.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // create a post
    static async createCategory(req, res) {
        const post = req.body;

        try {
            await Category.create(post);
            res.status(201).json({ message: "Post created successfully!" });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // update a post
    static async updateCategory(req, res) {
        const id = req.params.id;
        const newPost = req.body;
        // newPost.image = new_image;

        try {
            await Category.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post updated successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // detele a post
    static async deleteCategory(req, res) {
        const id = req.params.id;
        try {
            const result = await Category.findByIdAndDelete(id);
            res.status(200).json({ message: "Post deleted successfully!" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
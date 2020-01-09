const express = require('express');
const router = express.Router();

// Model
const Article = require('../../models/Article');

// @route GET api/v1/articles
// @desc Get all articles
// @access Public
router.get('/', async (req, res) => {
    try {
        await Article.find()
            .select('-__v')
            .sort({ date: -1 })
            .then(articles => res.status(200).json(articles))
    } catch (e) {
        res.status(500).json({
            success: 0,
            error: e.message
        })
    }
});

// @route POST api/v1/articles
// @desc Create article
// @access Private
router.post('/', async (req, res) => {
    try {
        const newArticle = new Article({
            title: req.body.title,
            body: req.body.body
        });

        await newArticle.save()
            .then(article => res.status(200).json({
                message: "Article added.",
                data: article
            }))
    } catch (e) {
        res.status(500).json({
            success: 0,
            error: e.message
        })
    }
});

// @route DELETE api/v1/articles/:id
// @desc Delete article
// @access Private
router.delete('/:id', async (req, res) => {
    try {
        await Article.findById(req.params.id)
            .then(article => article.remove().then(() => res.status(200).json({
                success: 1,
                message: "Article deleted"
            })))
    } catch (e) {
        res.status(500).json({
            success: 0,
            error: e.message
        })
    }
});

module.exports = router;
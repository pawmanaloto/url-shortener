const ShortUrl = require('../models/ShortUrl');
const validUrl = require('valid-url');

/**
 * @route POST /api/shorturl
 * @description Generates short URL
 */
exports.generateShortURL = async (req, res) => {
    try {
        let { fullURL } = req.body;

        if (validUrl.isUri(fullURL) === undefined) {
            throw {
                message: 'Invalid Web URL'
            };
        }

        const generated = await ShortUrl.create({
            full: fullURL
        });

        return res.status(201).json({
            success: true,
            data: generated
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

/**
 * @route GET /:shortUrl
 */
exports.getFullURL = async (req, res, next) => {
    try {
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
        if (shortUrl === null) {
            throw {
                message: 'Invalid URL'
            };
        }

        shortUrl.clicks++;
        shortUrl.save();

        res.redirect(shortUrl.full);
    } catch (error) {
        return res.status(404).json({
            success: false,
            error: error.message,
            params: req.param
        });
    }
};

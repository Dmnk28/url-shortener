const UrlSet = require('../models/urlSet');

const findOriginalUrl = async (originalUrl) => {
    const urlset = await UrlSet.findOne({ original_url: originalUrl });
    return urlset;
}

module.exports = findOriginalUrl;
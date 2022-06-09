const UrlSet = require('../models/urlSet');

const findShortUrl = async (shortUrl) => {
    const urlSet = await UrlSet.findOne({ short_url: shortUrl });
    return urlSet;
}

module.exports = findShortUrl;
const UrlSet = require('../models/urlSet');

const createAndSaveUrlSet = async (originalUrl) => {
    const urlSet = await new UrlSet({
      original_url: originalUrl,
    })
    urlSet.save()

    return {
      original_url: urlSet.original_url,
      short_url: urlSet.short_url
    }
}

module.exports = createAndSaveUrlSet;
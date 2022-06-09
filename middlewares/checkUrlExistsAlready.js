const findOriginalUrl = require('../services/findOriginalUrl');

const checkUrlExistsAlready = async (req, res, next) => {
    const urlEntry = await findOriginalUrl(req.body.url);
    if (urlEntry) {
      return res.json({
        original_url: urlEntry.original_url,
        short_url: urlEntry.short_url
      });
    } else {
      next();
    }
}

module.exports = checkUrlExistsAlready;
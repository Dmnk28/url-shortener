const urlChecker = require('../utils/urlChecker');

const validateUrls = (req, res, next) => {
    if (urlChecker(req.body.url)) return next();
    return res.json({
      error: "Invalid URL"
    });
}

module.exports = validateUrls;
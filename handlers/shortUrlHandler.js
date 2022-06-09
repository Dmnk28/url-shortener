const findShortUrl = require('../services/findShortUrl');

const shortUrlHandler = async (req, res) => {
  try {
    const url = await findShortUrl(req.params.number);
    if (url) {
      return res.redirect(url.original_url);
    } else { 
      return res.status(404).json('Not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
}

module.exports = shortUrlHandler;
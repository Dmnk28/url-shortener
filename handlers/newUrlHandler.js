const createAndSaveUrlSet = require('../services/createAndSaveUrlSet');

const newUrlHandler = async (req, res) => {
  const result = await createAndSaveUrlSet(req.body.url);
  res.json(result)
}

module.exports = newUrlHandler;
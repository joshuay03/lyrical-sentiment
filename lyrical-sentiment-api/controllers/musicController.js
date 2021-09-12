const axios = require('axios');

const get = async (req, res, next) => {
  const { artist, song } = req.query;

  axios
    .get(process.env.LYRICS_API_URL + '/' + artist + '/' + song)
    .then((res) => res.data)
    .then((data) => res.status(200).json(data));
}

module.exports = {
  get
}

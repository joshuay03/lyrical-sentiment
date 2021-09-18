const axios = require('axios');
const lyricsHelper = require('../helpers/lyricsHelper');

const get = async (req, res, next) => {
  const { numSongs, ...music } = req.query;

  let lyricsList = [];

  async function getLyrics() {
    for (let i = 0; i < numSongs; i++) {
      let lyrics = await axios
        .get(`${process.env.LYRICS_API_URL}/${music['artist' + (i + 1).toString()]}/${music['song' + (i + 1).toString()]}`)
        .then((res) => res.data.lyrics);
      lyricsList.push({
        artist: music['artist' + (i + 1).toString()],
        song: music['song' + (i + 1).toString()],
        lyrics: lyricsHelper.convertLyricsToSentences(lyrics),
      });
    }
  };

  await getLyrics();

  res.locals.lyricsList = lyricsList;

  next();
};

module.exports = {
  get
};

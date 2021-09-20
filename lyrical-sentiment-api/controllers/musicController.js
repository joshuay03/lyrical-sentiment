const axios = require('axios');
const lyricsHelper = require('../helpers/lyricsHelper');
const lyricsErrorHelper = require('../helpers/lyricsErrorHelper');

const get = async (req, res, next) => {
  const { numSongs, ...music } = req.query;

  let errors = false;
  let lyricsList = [];

  async function getLyrics() {
    for (let i = 0; i < numSongs; i++) {
      let lyrics = await axios
        .get(`${process.env.LYRICS_API_URL}/${music['artist' + (i + 1).toString()]}/${music['song' + (i + 1).toString()]}`)
        .then((res) => res.data.lyrics)
        .catch((err) => {
          errors = true;
          if (lyricsErrorHelper.getErrorStatusCode(err.message) === 404) {
            res.status(404).json(
              `Could not find lyrics for ${music['song' + (i + 1).toString()]} by ${music['artist' + (i + 1).toString()]}`
            );
          }
        });

      if (!errors) {
        lyricsList.push({
          artist: music['artist' + (i + 1).toString()],
          song: music['song' + (i + 1).toString()],
          lyrics: lyrics,
          formattedLyrics: lyricsHelper.convertLyricsToSentences(lyrics),
        });
      } else {
        break;
      }
    }
  };

  await getLyrics();

  if (!errors) {
    res.locals.lyricsList = lyricsList;

    next();
  }
};

module.exports = {
  get
};

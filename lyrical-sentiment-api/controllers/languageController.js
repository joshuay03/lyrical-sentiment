const language = require('@google-cloud/language');

const keys = require('../keys.json');
const options = {
  credentials: {
    client_email: keys.client_email,
    private_key: keys.private_key
  }
};
const client = new language.LanguageServiceClient(options);

const search = async (req, res, next) => {

  async function getSentimentData() {
    for (let i = 0; i < res.locals.lyricsList.length; i++) {
      const document = {
        content: res.locals.lyricsList[i].formattedLyrics,
        type: 'PLAIN_TEXT',
      };

      const [result] = await client.analyzeSentiment({document});

      res.locals.lyricsList[i].sentimentData = result;
    }
  }

  await getSentimentData();

  res.status(200).json(res.locals.lyricsList).end();
};

module.exports = {
  search
};

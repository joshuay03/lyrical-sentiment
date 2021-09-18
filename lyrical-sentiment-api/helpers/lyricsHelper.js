/**
 * Takes a string and replaces a part of it at the given index with
 * the replacement provided
 * @param {string} string the string to be modified
 * @param {number} index the index where the replacement should occur
 * @param {string} replacement the contents to replace with
 * @returns the modified string
 */
const replaceStringUsingIndex = (string, index, replacement) => {
  if (index >= string.length) return string;
  return string.substring(0, index) + replacement + string.substring(index + 1);
}

/**
 * Takes the lyrics of a song as a string and breaks it up into individual
 * sentences
 * @param {string} lyrics the music lyrics to be converted
 * @returns the modified lyrics as sentences
 */
const convertLyricsToSentences = (lyrics) => {
  let count = 0;
  let first = 0;
  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i] === '\n') {
      count++;
      if (count === 1) {
        first = i;
      } else if (lyrics[i+1] !== '\n') {
        lyrics = replaceStringUsingIndex(lyrics, i + 1, '\n' + lyrics[i + 1]);
        i++;
      } else {
        let subCount = 0;
        for (let l = i + 2; l < lyrics.length; l++) {
          if (lyrics[l] === '\n') subCount++;
          else {
            lyrics = replaceStringUsingIndex(lyrics, i + 2, lyrics[i + 2 + subCount]);
            break;
          }
        }
        i++;
      }
    }
  }
  lyrics = lyrics.slice(first + 1);
  return lyrics;
}

module.exports = {
  replaceStringUsingIndex,
  convertLyricsToSentences
}

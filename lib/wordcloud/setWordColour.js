function setWordColour(word) {
  word.color = word.sentimentScore > 60 ? 'green' : word.sentimentScore < 40 ? 'red' : 'grey';
  return word;
}

module.exports = setWordColour;

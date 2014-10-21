var map = require('../utils/map');

function parseTopic(topic) {
  return {
    id: topic.id,
    value: topic.label,
    score: topic.sentimentScore,
    count: topic.volume,
    sentiment: topic.sentiment
  };
}

module.exports = parseTopic;

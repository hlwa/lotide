//Actual functions
const letterPositions = function(sentence) {
  const results = {}, le = sentence.length;
  for (let i = 0; i < le; i ++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//Test code
// const expectedObj = {
//   h : [0],
//   e : [1],
//   l : [2, 3],
//   o : [4],
// };

// assertArraysEqual(letterPositions("hello")['h'], [0]);
// assertArraysEqual(letterPositions("hello")['l'], [2, 3]);

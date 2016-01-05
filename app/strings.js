exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
  	console.log(str)
  	var rev_str = str.split("").reverse().join("");
  	return rev_str;
  }
};

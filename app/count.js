exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	console.log("start")
	setTimeout(function(){
		if(start<=end)
	  	console.log(start);	
	},100);
  	return {
  		cancel:function(){
  			clearTimeout();
  		}
  	}
  }
};

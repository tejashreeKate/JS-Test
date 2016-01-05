exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  },

  manipulateRemoteData : function(url) {
  	var names = [];
  	var promise = $.Deferred();
  	$.ajax(url).then(function (res){
  		_.each(res.people, function (obj,i){
  			names.push(obj.name)
  		})
  		names.sort();
  		promise.resolve(names)
  	})
  	return promise;
  }
};

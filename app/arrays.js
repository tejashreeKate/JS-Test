exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return _.indexOf(arr,item)
  },

  sum : function(arr) {
    var sum = 0;
    _.each(arr, function (obj,i){
        sum = sum + obj;
    })
    return sum;
  },

  remove : function(arr, item) {
    var arr_new = []
    _.each(arr, function (obj,i){
      if(obj != item){
        arr_new.push(obj);
      }
    })
    return arr_new;

  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.length;
    while( index-- ){
      if(arr[index] === item ) arr.splice(index,1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var count = 0;
    _.each(arr, function (obj,i){
      if(obj === item){
        count++;
      }
    })
    return count;
  },

  duplicates : function(arr) {
  },

  square : function(arr) {
    var arr_new = [];
    _.each(arr, function (obj,i){
       arr_new.push(obj*obj);
    })
    return arr_new;
  },

  findAllOccurrences : function(arr, target) {
    var pos = [];
    _.each(arr, function (obj,i){
      if(obj === target){
        pos.push(i);
      }
    })
    return pos;
  }
};

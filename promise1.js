var Promise = function(ok){
  this.state = "unfinished";
  this.ok = ok || function(obj){ return obj;};
};

Promise.prototype = {
  resolve: function(obj){
    if(this.state !== 'unfinished'){
      throw '已经完成了，不能再次 resolve';
    }
    this.state = 'finished';
  }
};

var Promise = new Promise(function(obj){return obj;});
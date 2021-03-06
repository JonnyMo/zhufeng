var Promise = function(ok){
    this.state = 'unfulfilled';
    this.ok = ok || function(obj) { return obj; };
    this.thens = [];
};

Promise.prototype = {
    resolve: function(obj){
        if (this.state != 'unfulfilled') throw '已完成，不能再次resolve';
        this.state = 'fulfilled';
        this.result = this.ok(obj); // 执行ok
 
        for (var i=0, len=this.thens.length; i<len; ++i){
            // 依次调用该任务的后续任务
            var then = this.thens[i];
            this._fire(then.promise, then.ok);
        }
        return this;
    },

    _fire: function(nextPromise, nextOK){
        var nextResult = nextOK(this.result); // 调用nextOK
        if (nextResult instanceof Promise){
            // 异步的情况，返回值是一个Promise，则当其resolve的时候，nextPromise才会被resolve
            nextResult.then(function(obj){
                nextPromise.resolve(obj);
            });
        }else{
            // 同步的情况，返回值是普通结果，立即将nextPromise给resolve掉
            nextPromise.resolve(nextResult);
        }
        return nextPromise;
    },
    _push: function(nextPromise, nextOK){
        this.thens.push({
            promise: nextPromise,
            ok: nextOK
        });
        return nextPromise;
    },
    then: function(nextOK){
        var promise = new Promise();
        if (this.state == 'fulfilled'){
            // 如果当前状态是已完成，则nextOK会被立即调用
            return this._fire(promise, nextOK);
        }else{
            // 否则将会被加入队列中
            return this._push(promise, nextOK);
        }
    }
};
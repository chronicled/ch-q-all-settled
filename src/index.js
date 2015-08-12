angular.module('chQAllSettled', []).config(function($provide) {
  $provide.decorator('$q', function($delegate) {
    var $q = $delegate;
    var fulfilled = 'fulfilled';
    var rejected = 'rejected';

    $q.allSettled = function(promises) {
      return $q.all(promises.map(function(promise) {
        return promise.then(function(value) {
          return { state: fulfilled, value: value };
        }, function(reason) {
          return { state: rejected, reason: reason };
        });
      }));
    };

    $q.isFulfilled = function(promises) {
      return promises.filter(isFulfilled).map(promiseValue);
    };

    function isFulfilled(promise) {
      return promise.state === fulfilled;
    }

    function promiseValue(promise) {
      return promise.value;
    }

    return $q;
  });
});

module.exports = 'chQAllSettled';
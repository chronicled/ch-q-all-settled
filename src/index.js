angular.module('chQAllSettled', []).config(function($provide) {
  $provide.decorator('$q', function($delegate) {
    var $q = $delegate;
    $q.allSettled = function(promises) {
      return $q.all(promises.map(function(promise) {
        return promise.then(function(value) {
          return { state: 'fulfilled', value: value };
        }, function(reason) {
          return { state: 'rejected', reason: reason };
        });
      }));
    };
    return $q;
  });
});

module.exports = 'chQAllSettled';
# ch-q-all-settled

$q extension for <a href="https://github.com/kriskowal/q/wiki/API-Reference#promiseallsettled">kriskowal's Q#allSettled</a>.

`$q.all()` won't allow you to continue unless all promises are *successfully* resolved. `$q.allSettled()` allows you to continue with promises that may be un-fulfilled (unsuccessful).

Use it like this:

```
// SomeService

// #get
return $q.allSettled(promises).then(function(p) {
	return $q.isFulfilled(p);
});

// or you can skip the $q.isFulfilled part if you want to check this in a different part of your code
// if you do care about the promises that were unfulfilled
```

Then somewhere else in your code, you can simply get all the resolved promise values:
```
SomeService.get(query).then(function(results) {
  // do something with results
});
```
<hr>

&copy; 2015 Artcoa, Inc. (Chronicled), MIT License

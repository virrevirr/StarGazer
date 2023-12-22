// Code taken from the lab

function resolvePromise(prms, promiseState) {
    // Latest promise (prms) and a promise state object (promiseState) as arguments
  
    // Initialize promiseState with the provided promise
    promiseState.promise = prms;
  
    // When the promise changes, data and error will become null
    // After the promise has been resolved either data or error will get information again
    promiseState.data = null;
    promiseState.error = null;
  
    if (promiseState.promise === null) {
      promiseState.error = "Promise is null";
      return;
    }
  
    const originalPromise = promiseState.promise;
    // Attempt to resolve the promise
    prms.then(dataACB).catch(errorACB);
  
    function dataACB(promise) {
      // Callback function for handling successful promise resolution
      if (promiseState.promise === originalPromise) {
        // Check if the promise is still the latest one before setting the data
        promiseState.data = promise;
      }
    }
  
    function errorACB(error) {
      // Callback function for handling promise rejection
      if (promiseState.promise === originalPromise) {
        // Check if the promise is still the latest one before setting the error
        promiseState.error = error;
      }
    }
  }
  
  export default resolvePromise;
  

// tagen från labben 

function resolvePromise(prms, promiseState){
    promiseState.promise= prms;
    promiseState.data= null;
    promiseState.error= null;

    if (promiseState.promise === null){
        promiseState.error= 'Promise is null';
        return;
    }

    const originalPromise= promiseState.promise;
    prms.then(dataACB).catch(errorACB);

    function dataACB(promise){
        if (promiseState.promise === originalPromise){
            promiseState.data= promise;}
        }
    

    function errorACB(error){
        if (promiseState.promise === originalPromise){  
        promiseState.error= error;}}

}

export default resolvePromise;

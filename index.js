function myEach(collection, callback) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    //arr.forEach(elem=>callback(elem));
    for (let i = 0; i< arr.length; i++) {
        callback(arr[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    let newArr = []
    //arr.map(elem=> newArr.push(callback(elem)));
    for (let i=0; i<arr.length; i++) {
        newArr.push(callback(arr[i]));
        
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    /*if (acc === undefined) {
        return arr.reduce(callback);
    } */
    //return arr.reduce(callback, acc)
    let total =0;
    for (let i=0; i< arr.length; i++){
        if (acc !== undefined){
            total += callback(acc, arr[i]) -acc;
        } else {
            acc = 0;
            total += arr[i];
        }
    }
    return total + acc;
}

function myFind(collection, predicate) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    
    for (let i =0; i< arr.length; i++) {
        if (predicate(arr[i]) ===true) {
            return arr[i];
            break;
        }
    }
    //return arr.find(predicate);
}

function myFilter(collection, predicate) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    let newArr = [];
    for (let i =0; i< arr.length; i++) {
        if (predicate(arr[i]) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
    //return arr.filter(predicate);
}

function mySize(collection) {
    let arr;
    if (Array.isArray(collection) === false) {
        arr = Object.values(collection);
    } else {
        arr = collection;
    }
    return arr.length;
}

function myFirst(array, num) {
    if (num === undefined) {
        return array[0];
    } else {
        return array.slice(0, num);
    }
}

function myLast (array, num) {
    if (num === undefined) {
        return array[array.length-1];
    } else {
        return array.slice(-num);
    }
}

function myKeys (object) {
    let newArr = [];
    for (let key in object) {
        newArr.push(key);
    }
    return newArr;
    //return Object.keys(object);
}

function myValues(object) {
    let newArr = [];
    for (let key in object) {
        newArr.push(object[key]);
    }
    return newArr;
    //return Object.values(object);
}
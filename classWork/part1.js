// task 1

/*

const myForEach = (arr , fn) => {

    for (let i = 0 ; i < arr.length ; ++i) {

        fn(arr[i] , i , arr);

    }

}

myForEach(["a" , "b"] , (item , i) => console.log(i , item));

*/

const myMap = (arr , fn) => {

    const res = [];

    for (let i = 0 ; i < arr.length ; ++i) {

        res.push(fn(arr[i] , i , arr));

    }
    return res ;

}

console.log( myMap([1 , 2 , 3], (x) => x * 10) ) ;
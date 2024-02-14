//From my previous version of divide and sum 
//Samuel Gonzalez Garcia 2/13/2024

function divideAndConquerSum(a) {
    if (a.length < 1) {
        return 0
    }

    if(a.length == 1) {
        return a[0];
    }

    const lengthThird = Math.ceil(a.length / 3);

    const beginning = a.slice(0, lengthThird);
    //console.log("this is the beginning " + beginning)

    const middle = a.slice(lengthThird, (lengthThird*2));
    //console.log(" this is the middle " + middle);

    const end = a.slice((lengthThird * 2));
    //console.log(" this is the end " + end);

    return divideAndConquerSum(beginning) + divideAndConquerSum (middle) + divideAndConquerSum(end)
}
// console.log(divideAndConquerSum([1,7,8,9]))
//Solution 8

const sumArray = (arr) => {
    if (!Array.isArray(arr)) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    return sum;
};

console.log(sumArray([7, 32, 56, 2])); 

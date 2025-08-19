//Solution 1

const findMax = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

console.log(findMax([93, 2, 167, 80, 45])); 

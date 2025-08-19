//solution 4

const filterEvenNumbers = (arr) => {
    if (!Array.isArray(arr)) {
        return [];
    }

    const evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    return evenArr;
};

console.log(filterEvenNumbers([156, 235, 302, 82, 204, 167])); 
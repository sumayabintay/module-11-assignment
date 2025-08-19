// Solution 5

const sortArrayDescending = (arr) => {
    if (!Array.isArray(arr)) {
        return [];
    }

    const sorted = arr.slice();

    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] > sorted[i]) {
                const temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }
    }

    return sorted;
};

console.log(sortArrayDescending([10, 20, 45, 23, 38])); 

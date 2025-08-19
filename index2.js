//Solution 2

const countWords = (str) => {
    if (typeof str !== 'string') return 0;

    const trimmed = str.trim();
    if (trimmed === '') return 0;

    const words = trimmed.split(/\s+/);
    return words.length;
};

console.log(countWords("Hello JavaScript programme")); 
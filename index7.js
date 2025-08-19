// Solution 7

const reverseString = (str) => {
    if (typeof str !== 'string') {
        return '';
    }

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
};

console.log(reverseString("HellowWorld")); 
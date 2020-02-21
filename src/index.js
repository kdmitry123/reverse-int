module.exports = function reverse (n) {
    let reverseNumber =parseInt(String(n).split('').reverse().join(''));
    return reverseNumber;
};

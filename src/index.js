module.exports = function reverse (n) {
    let x = String(n).split();
    let y = x[0].split('').reverse().join('');
    return parseInt(y);
}
function log(params) {
    console.log(params);
}
function log1(params) {
    console.log(params);
}
function log2(params) {
    console.log(params);
}

// module.exports.log = log; module.exports = {     log,     log1,     log2 }
exports.first = log;
exports.second = log1;
exports.third = log2;
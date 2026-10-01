const assert = require("node:assert/strict");
const primeChecker = require("./index");

assert.ok(primeChecker.isPrime(2), "2 should be prime");
assert.ok(primeChecker.isPrime(3), "3 should be prime");
assert.ok(primeChecker.isPrime(5), "5 should be prime");
assert.ok(primeChecker.isPrime(7), "7 should be prime");
assert.ok(primeChecker.isPrime(11), "11 should be prime");
assert.ok(primeChecker.isPrime(13), "13 should be prime");
assert.ok(primeChecker.isPrime(17), "17 should be prime");
assert.ok(primeChecker.isPrime(19), "19 should be prime");
assert.ok(primeChecker.isPrime(23), "23 should be prime");
assert.ok(primeChecker.isPrime(29), "29 should be prime");

assert.ok(!primeChecker.isPrime(1), "1 should not be prime");
assert.ok(!primeChecker.isPrime(4), "4 should not be prime");
assert.ok(!primeChecker.isPrime(6), "6 should not be prime");
assert.ok(!primeChecker.isPrime(8), "8 should not be prime");
assert.ok(!primeChecker.isPrime(9), "9 should not be prime");

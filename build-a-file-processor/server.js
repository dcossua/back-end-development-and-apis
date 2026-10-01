const fsPromises = require("fs/promises");
const fs = require("fs");
const crypto = require("crypto");
const os = require("os");
const path = require("path");


const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);
"use strict";

var stdin = process.stdin;
stdin.addListener("data", function (d) {
  process.stdout.write(d.toString().trim().split("").reverse().join(""));
  process.stdout.write('\n');
});
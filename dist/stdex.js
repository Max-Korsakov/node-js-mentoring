"use strict";

var stdin = process.openStdin();
stdin.addListener("data", function (d) {
  process.stdout.write(d.toString().trim().split("").reverse().join(""));
  process.exit();
});
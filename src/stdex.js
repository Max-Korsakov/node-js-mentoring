let stdin = process.stdin;

stdin.addListener("data", (d) => {
    process.stdout.write( d.toString().trim().split("").reverse().join(""));
    process.stdout.write('\n');
})

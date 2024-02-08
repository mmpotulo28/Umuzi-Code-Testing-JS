function multiples ( num ) {
    let sum = 0;

    for ( let i = 1; i < num; i++ ) {
        if ( i % 3 === 0 || i % 5 === 0 ) {
            sum += i;
        }
    }

    return sum;
}

// tests
// define test cases
const testCases = [
    { input: 10, expected: 23 },
    { input: 11, expected: 33 },
    { input: 20, expected: 78 },
    { input: 200, expected: 9168 },
    { input: 1000, expected: 233168 },
];

// run test cases
testCases.forEach( ( { input, expected }, i ) => {
    const result = multiples( input );
    // console.log( result );

    if ( result === expected ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. \nExpected: ${ expected }\nbut got: ${ result }\n----END TEST----` );
    }
} );
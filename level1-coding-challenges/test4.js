function square ( num ) {
    for ( let i = 0; i < num; i++ ) {
        let rows = "";

        for ( let j = 0; j < num; j++ ) {
            rows += "#";
        }
        console.log( rows );
    }
}

// tests
// define test cases
const testCases = [
    { input: 1, expected: '#' },
    { input: 3, expected: '###\n###\n###' },
    { input: 0, expected: '' },
    // add more test cases here
];

// run test cases
testCases.forEach( ( { input, expected }, i ) => {
    const result = square( input );
    // console.log( result );

    if ( result === expected ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. Expected:\n${ expected }\nbut got:\n${ result }\n----END TEST----` );
    }
} );
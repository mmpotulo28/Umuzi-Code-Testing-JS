function hasThree ( num1, num2 ) {
    if ( ( num1 === 3 || num2 === 3 ) && ( num1 + num2 ).toString().includes( '3' ) ) {
        return true;
    } else {
        return false;
    }
}

// tests
// define test cases
const testCases = [
    { input1: 1, input2: 3, expected: false },
    { input1: 3, input2: 1, expected: false },
    { input1: 3, input2: 3, expected: false },
    { input1: 5, input2: 1, expected: false },
    { input1: 3, input2: 0, expected: true },
    { input1: 10, input2: 3, expected: true },
];

// run test cases
testCases.forEach( ( { input1, input2, expected }, i ) => {
    const result = hasThree( input1, input2 );
    // console.log( result );

    if ( result === expected ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. \nExpected: ${ expected }\nbut got: ${ result }\n----END TEST----` );
    }
} );
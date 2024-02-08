function isSixtyFive ( num1, num2 ) {
    const total = num1 + num2;
    const sixtyFive = 65;

    return num1 === sixtyFive || num2 === sixtyFive || total === sixtyFive;
}

// tests
// define test cases
const testCases = [
    { input1: 1, input2: 65, expected: true },
    { input1: 65, input2: 1, expected: true },
    { input1: 65, input2: 65, expected: true },
    { input1: 5, input2: 1, expected: false },
    { input1: 3, input2: 0, expected: false },
    { input1: 60, input2: 5, expected: true },
];

// run test cases
testCases.forEach( ( { input1, input2, expected }, i ) => {
    const result = isSixtyFive( input1, input2 );
    // console.log( result );

    if ( result === expected ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        // set console text to red
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. \nExpected: ${ expected }\nbut got: ${ result }\n----END TEST----` );
    }
} );
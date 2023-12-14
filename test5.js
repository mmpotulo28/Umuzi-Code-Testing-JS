function triangle ( size ) {
    let result = '';

    if ( size > 0 ) {

        for ( let i = 1; i <= size; i++ ) {
            result += '#'.repeat( i ) + '\n';
        }
    } else if ( size < 0 ) {

        for ( let i = -size; i >= 1; i-- ) {
            result += '#'.repeat( i ) + '\n';
        }
    }


    // console.log( result.trim() );
    return result.trim();
}
// module.exports = { triangle };

// test cases
// define test cases
const testCases = [
    { input: 1, expected: '#' },
    { input: 3, expected: '#\n##\n###' },
    { input: -3, expected: '###\n##\n#' },
    // add more test cases here
];

// run test cases
testCases.forEach( ( { input, expected }, i ) => {
    const result = triangle( input );
    // console.log( result );

    if ( result === expected ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. Expected:\n${ expected }\nbut got:\n${ result }\n----END TEST----` );
    }
} );
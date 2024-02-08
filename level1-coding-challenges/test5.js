function triangle ( height ) {
    let result = '';
    let row = '';

    if ( height < 0 ) {
        height = height * -1;

        for ( let i = height; i > 0; i-- ) {
            row = '#'.repeat( i );

            if ( i > 1 ) {
                result += row + '\n';
            } else {
                result += row;
            }
        }

    } else {
        for ( let i = 1; i <= height; i++ ) {
            row = '#'.repeat( i );

            if ( i < height ) {
                result += row + '\n';
            } else {
                result += row;
            }
        }
    }

    // console.log( result );
    return result;
}

/************ test cases********************/
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
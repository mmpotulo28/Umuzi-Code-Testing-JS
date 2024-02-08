function combine ( arr1, arr2 ) {
    const combinedArray = [];
    for ( let i = 0; i < Math.max( arr1.length, arr2.length ); i++ ) {
        if ( i < arr1.length ) {
            combinedArray.push( arr1[ i ] );
        }
        if ( i < arr2.length ) {
            combinedArray.push( arr2[ i ] );
        }
    }
    return combinedArray;
}

// test cases
const testCases = [
    { input: [ [ 1, 2, 3, 4, 5 ], [ 'a', 'b', 'c', 'd' ] ], expected: [ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5 ] },
    // add more test cases here
    { input: [ [ 5, 4, 3 ], [ 'd', 'c', 'b', 'a', 'Z' ] ], expected: [ 5, 'd', 4, 'c', 3, 'b', 'a', 'Z' ] },
];

testCases.forEach( ( { input, expected }, i ) => {
    const result = combine( ...input );

    if ( result.join( '' ) === expected.join( '' ) ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. Expected:\n${ expected }\nbut got:\n${ result }\n----END TEST----` );
    }
} );
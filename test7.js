function combine ( list1, list2 ) {
    let combinedList = [];
    const maxLength = list1.length > list2.length ? list1.length : list2.length;

    for ( let i = 0; i < maxLength; i++ ) {
        if ( i < list1.length ) {
            combinedList.push( list1[ i ] );
        }
        if ( i < list2.length ) {
            combinedList.push( list2[ i ] );
        }
    }

    return combinedList;
}

// test cases
const testCases = [
    { input: [ [ 1, 2, 3, 4, 5 ], [ 'a', 'b', 'c', 'd' ] ], expected: [ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5 ] },
    // add more test cases here
    { input: [ [ 5, 4, 3, 2, 1 ], [ 'd', 'c', 'b', 'a' ] ], expected: [ 5, 'd', 4, 'c', 3, 'b', 2, 'a', 1 ] },
];

testCases.forEach( ( { input, expected }, i ) => {
    const result = combine( ...input );

    if ( result.join( '' ) === expected.join( '' ) ) {
        console.log( `Test case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. Expected:\n${ expected }\nbut got:\n${ result }\n----END TEST----` );
    }
} );
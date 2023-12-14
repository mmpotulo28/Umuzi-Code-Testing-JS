function combine ( array1, array2 ) {
    const combined = [];
    const maxLength = Math.max( array1.length, array2.length );

    for ( let i = 0; i < maxLength; i++ ) {
        if ( i < array1.length ) {
            combined.push( array1[ i ] );
        }
        if ( i < array2.length ) {
            combined.push( array2[ i ] );
        }
    }

    return combined;
}

// test cases
const testCases = [
    { input: [ [ 1, 2, 3, 4, 5 ], [ 'a', 'b', 'c', 'd' ] ], expected: [ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5 ] },
    // add more test cases here
    { input: [ [ 5, 4, 3, 2, 1 ], [ 'd', 'c', 'b', 'a' ] ], expected: [ 5, 'd', 4, 'c', 3, 'b', 2, 'a', 1 ] },
];

testCases.forEach( ( { input, expected } ) => {
    const result = combine( ...input );
    console.log( JSON.stringify( result ) === JSON.stringify( expected ) );
} );
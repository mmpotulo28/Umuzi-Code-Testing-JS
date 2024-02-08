function longest ( arr ) {
  let maxLength = 0;
  let longestStrings = "";

  for ( let i = 0; i < arr.length; i++ ) {
    const word = arr[ i ];

    if ( word.length > maxLength ) {
      maxLength = word.length;
      longestStrings = word;
    } else if ( word.length === maxLength ) {
      longestStrings += `,${ word }`;
    }
  }
  const result = longestStrings.split( "," ).join( "\n" );
  console.log( result );
}

// tests
// define test cases
const testCases = [
  { input: [ 'abc', 'ab', 'a' ], expected: [ 'abc' ] },
  { input: [ 'a', 'ab', 'abc' ], expected: [ 'abc' ] },
  { input: [ 'abc', 'ab', 'a', 'abcd' ], expected: [ 'abcd' ] },
  { input: [ 'abc', 'ab', 'a', 'abcdf', 'abcde' ], expected: [ 'abcdf', 'abcde' ] },
  { input: [ 'abc', 'anem', 'a', 'aa', 'name', 'bah' ], expected: [ 'anem', 'name' ] }
  // add more test cases here
];

// run test cases
testCases.forEach( ( { input, expected }, i ) => {
  console.log( `\n\n${ i + 1 }-------Got----------` );
  longest( input );
  console.log( '-----expected------' );
  console.log( expected );
} );
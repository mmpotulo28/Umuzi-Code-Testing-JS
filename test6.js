function longest ( array ) {
  let result = '';
  for ( const element of array ) {
    if ( element.length > result.length ) {
      result = element;
    }
  }
  for ( const element of array ) {
    if ( element.length === result.length ) {
      console.log( element );
    }
  }

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
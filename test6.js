function longest ( strings ) {
  if ( strings.length === 0 ) {
    console.log( "The input array is empty." );
    return;
  }

  let longestLength = 0;
  const longestStrings = [];

  for ( const string of strings ) {
    if ( string.length > longestLength ) {
      longestLength = string.length;
      longestStrings.length = 0;
      longestStrings.push( string );
    } else if ( string.length === longestLength ) {
      longestStrings.push( string );
    }
  }

  for ( const longestString of longestStrings ) {
    console.log( longestString );
  }
}

// test cases
longest( [ 'aa', 'yourname', 'name', 'n' ] );
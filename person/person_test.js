class Person {
    constructor ( { name, age, gender, interests } ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    returnInterests () {
        const interestsStr =
            this.interests.length === 0 || this.interests.includes( '' )
                ? `I have no interests`
                : this.interests.length === 1
                    ? `My interest is ${ this.interests[ 0 ] }`
                    : `My interests are ${ this.interests
                        .slice( 0, -1 )
                        .join( ", " ) } and ${ this.interests.slice( -1 ) }`;
        return interestsStr;
    }
    hello () {
        const interestsStr = this.returnInterests();
        let hello = "";
        if ( typeof this.name === "string" ) {
            hello += `Hello, my name is ${ this.name },`;
        }
        if ( typeof this.gender === "string" ) {
            hello += ` my gender is ${ this.gender } `;
        }
        if ( typeof this.age === "number" ) {
            hello += `and I am ${ this.age } years old. `;
        }
        hello += `${ interestsStr }.`;
        return hello;
    }
}

// module.exports = { Person };

// person with 3 interests
const person1 = new Person( {
    name: "Ryan",
    age: 30,
    gender: 'male',
    interests: [ 'being a hardarse', 'agile', 'ssd hard drives' ],
} );

// person with no interests
const person2 = new Person( {
    name: "Katie",
    age: 32,
    gender: 'female',
    interests: []
} );

// person with 1 interest
const person3 = new Person( {
    name: 'John',
    age: 25,
    gender: 'male',
    interests: [ 'football' ]
} );

// write tests
const testCases = [
    { input: person1, expected: 'Hello, my name is Ryan, my gender is male and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.' },
    { input: person2, expected: 'Hello, my name is Katie, my gender is female and I am 32 years old. I have no interests.' },
    { input: person3, expected: 'Hello, my name is John, my gender is male and I am 25 years old. My interest is football.' }
];

testCases.forEach( ( { input, expected }, i ) => {
    const result = input.hello();

    if ( result == expected.trim() ) {
        console.log( `\nTest case ${ i + 1 }: PASS` );
    } else {
        console.log( `\n-------START TEST------\nTest case ${ i + 1 }: FAIL. Expected:\n${ expected }\nbut got:\n${ result }\n----END TEST----` );
    }
} );
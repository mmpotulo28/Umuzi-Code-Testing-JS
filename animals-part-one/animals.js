class Animal {
    constructor ( _name ) {
        this.name = _name;
    }
    eat () {
        return ( `${ this.name } eats` );
    }
}

class Dog extends Animal {
    constructor ( _name ) {
        super( _name || 'Rax' );
    }
    sound () {
        return "Bark";
    }
}

class Cat extends Animal {
    constructor ( _name ) {
        super( _name || "Stormy" );
    }

    sound () {
        return "Meow";
    }
}

class Home {
    constructor () {
        this.petAnimals = [];
    }
    adoptPet ( animal ) {
        if ( this.petAnimals.includes( animal ) ) {
            throw new Error( "This pet has already been adopted!" );
        }
        this.petAnimals.push( animal );
    }
    makeAllSounds () {
        for ( let pet of this.petAnimals ) {
            console.log( pet.sound() );
        }
    }
}

module.exports = { Animal, Dog, Cat, Home };
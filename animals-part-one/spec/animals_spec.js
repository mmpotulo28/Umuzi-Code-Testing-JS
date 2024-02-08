const { Dog, Cat, Home } = require('../animals');

describe('Home', () => {
    let home;

    beforeEach(() => {
        home = new Home();
    });

    it('should adopt a pet', () => {
        const pet = new Dog();
        const result = home.adoptPet(pet);
        expect(result).toBe(1);
        expect(home.adoptedPets).toContain(pet);
    });

    it('should throw an error when adopting the same pet twice', () => {
        const pet = new Cat();
        home.adoptPet(pet);
        expect( () => home.adoptPet( pet ) ).toThrowError('This pet has already been adopted!');
    });

    it('should throw an error when adopting an invalid pet', () => {
        const pet = 'Not a pet';
        expect(() => home.adoptPet(pet)).toThrowError('Invalid pet, please adopt a valid pet.');
    });

    it('should make all adopted pets sound', () => {
        const dog1 = new Dog();
        const dog2 = new Dog('Simba');
        const cat1 = new Cat();
        const cat2 = new Cat('Smokey');
        home.adoptPet(dog1);
        home.adoptPet(dog2);
        home.adoptPet(cat1);
        home.adoptPet(cat2);
        const result = home.makeAllSounds();
        expect(result).toEqual(['Bark', 'Bark', 'Meow', 'Meow']);
    });
});

describe('Dog', () => {
    it('should return the correct name and eating behavior', () => {
        const dog1 = new Dog();
        const dog2 = new Dog('Simba');
        expect(dog1.eat()).toBe('Rax eats');
        expect(dog2.eat()).toBe('Simba eats');
    });

    it('should return the correct sound', () => {
        const dog1 = new Dog();
        const dog2 = new Dog('Simba');
        expect(dog1.sound()).toBe('Bark');
        expect(dog2.sound()).toBe('Bark');
    });
});

describe('Cat', () => {
    it('should return the correct name and eating behavior', () => {
        const cat1 = new Cat();
        const cat2 = new Cat('Smokey');
        expect(cat1.eat()).toBe('Stormy eats');
        expect(cat2.eat()).toBe('Smokey eats');
    });

    it('should return the correct sound', () => {
        const cat1 = new Cat();
        const cat2 = new Cat('Smokey');
        expect(cat1.sound()).toBe('Meow');
        expect(cat2.sound()).toBe('Meow');
    });
});
const errors = require('./helper_objects');

class Animal {
 #name;

 constructor(name) {
  if (typeof name !== 'string') {
   throw new Error(errors.invalidName);
  }
  this.#name = name;
 }

 sound() {
  return 'sound...';
 }

 eat() {
  return `${this.#name} eats`;
 }
}

class Cat extends Animal {
 constructor(name) {
  super(name || 'Stormy');
 }

 sound() {
  return 'Meow';
 }
}

class Dog extends Animal {
 constructor(name) {
  super(name || 'Rax');
 }

 sound() {
  return 'Bark';
 }
}

class Home {
 constructor() {
  this.pets = [];
 }

 adoptPet(pet) {
  if (!(pet instanceof Animal)) {
   throw new Error(errors.invalidPetType);
  }

  if (this.pets.includes(pet)) {
   throw new Error(errors.alreadyAdopted);
  }

  this.pets.push(pet);
  return this.pets.length;
 }

 makeAllSounds() {
  const sounds = [];
  for (const pet of this.pets) {
   sounds.push(pet.sound());
  }
  return sounds;
 }
}

module.exports = { Cat, Dog, Home };
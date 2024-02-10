class Animal {
  constructor(name) {
    this._name = name;

    if (typeof this._name !== "string") {
      throw new Error("Name must be a string");
    }
  }

  eat() {
    return this._name + " eats";
  }

  sound() {
    return "sound...";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name || "Rax");
  }

  sound() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name || "Stormy");
  }

  sound() {
    return "Meow";
  }
}

class Home {
  constructor() {
    this.pets = [];
  }

  adoptPet(pet) {
    if (!(pet instanceof Animal)) {
      throw new Error("Only instances of Animal can be adopted");
    }
    if (this.pets.includes(pet)) {
      throw new Error("This pet has already been adopted");
    } else {
      this.pets.push(pet);
      return this.pets.length;
    }
  }

  makeAllSounds() {
    return this.pets.map((pet) => pet.sound());
  }
}

module.exports = {
  Animal,
  Dog,
  Cat,
  Home,
};
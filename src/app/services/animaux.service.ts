var random = require('generate-random-data')

export class AnimauxService {

  categories: CategorieAnimal[] = []

  constructor() {
    for(let i = 0; i < 5; i++)
      this.categories.push(new CategorieAnimal(i));
  }

  getCategorie(id: number): CategorieAnimal {
    return this.categories.filter(( elem) => id == elem.id)[0];
  }
}

export class CategorieAnimal {
  id: number;
  photo: string;
  nom: string;
  nombre: number;

  animaux: Animal[] = [];

  constructor(id: number) {
    this.id = id;
    this.photo = "";
    this.nom = random.title(1,10);
    this.nombre = random.int(1,10);

    for(let i = 0; i < this.nombre; i++)
      this.animaux.push(new Animal(i));
  }

  getAnimal(id: number): Animal {
    return this.animaux.filter((elem) => id == elem.id)[0];
  }
}

export class Animal {

  id: number;
  photo: string;
  nom: string;
  nomSci: string;
  habitat: string;
  desc: string;

  constructor(id: number) {
    this.id = id;
    this.photo = "";
    this.nom = random.title(1,10);
    this.nomSci = random.title(1,20);
    this.habitat = random.title(1,10);
    this.desc = random.sentence(1,5);
  }
}

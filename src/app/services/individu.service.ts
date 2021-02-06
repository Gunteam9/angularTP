const random = require('generate-random-data');

export class IndividuService {
  individus:Individu[] = [];

  constructor() {
    for(var i:number = 0; i < 50; i++) {
      this.individus.push(new Individu());
    }
  }
}

export class Individu {
  id: string;
  genre: string;
  nom: string;
  mail: string;

  constructor() {
    this.id = random.guid();
    if (Math.round(Math.random()) == 0) {
      this.genre = "Monsieur";
      this.nom = random.maleFirstName();
    }
    else {
      this.genre = "Madame";
      this.nom = random.femaleFirstName();
    }
    this.nom += " " + random.lastName();
    this.mail =  random.email();

  }
}

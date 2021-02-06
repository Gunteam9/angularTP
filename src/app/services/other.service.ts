const random = require('generate-random-data');

export class OtherService {
  exercice7Data: string[] = [];

  constructor() {
    for(let i = 0; i < 10; i++) {
      if (Math.round(Math.random()) == 0)
        this.exercice7Data.push(random.maleFirstName() + " " + random.lastName())
      else
        this.exercice7Data.push(random.femaleFirstName() + " " + random.lastName())
    }
  }

  addItemExo7(): void {
    if (Math.round(Math.random()) == 0)
      this.exercice7Data.push(random.maleFirstName() + " " + random.lastName())
    else
      this.exercice7Data.push(random.femaleFirstName() + " " + random.lastName())
  }
}

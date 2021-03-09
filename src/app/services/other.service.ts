const random = require('generate-random-data');

export class OtherService {
  exercice7Data: string[] = [];

  constructor() {
    let savedData: string = JSON.parse(<string> localStorage.getItem('Exercice7Items'));

    if (savedData != null && savedData.length > 0) {
      for (let i = 0; i < savedData.length; i++) {
        this.exercice7Data.push(savedData[i]);
      }
    }
    else {
      for(let i = 0; i < 10; i++) {
        if (Math.round(Math.random()) == 0)
          this.exercice7Data.push(random.maleFirstName() + " " + random.lastName())
        else
          this.exercice7Data.push(random.femaleFirstName() + " " + random.lastName())
      }
    }
  }

  addItemExo7(): void {
    if (Math.round(Math.random()) == 0)
      this.exercice7Data.push(random.maleFirstName() + " " + random.lastName())
    else
      this.exercice7Data.push(random.femaleFirstName() + " " + random.lastName())

    localStorage.setItem("Exercice7Items", JSON.stringify(this.exercice7Data));
  }

  /**
   * Update the item at the given index with the given string
   * @param id
   * @param name
   */
  editItemExo7(index: number, name: string): void {
    this.exercice7Data[index] = name;
    localStorage.setItem("Exercice7Items", JSON.stringify(this.exercice7Data));
  }
}

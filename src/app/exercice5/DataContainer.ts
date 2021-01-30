class InternData {
  id: number;
  modele: string;
  marque: string;


  constructor(id: number, modele: string, marque: string) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
  }
}

export class DataContainer {
  private static instance: DataContainer = new DataContainer();

  data = [
    new InternData(0, 'Renault', 'Clio'),
    new InternData(1, 'Peugeot', '3008')
  ]

  public static getInstance(): DataContainer {
    return DataContainer.instance;
  }
}

export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      isActive: false
    },
    {
      name: 'Frigo',
      isActive: true
    },
    {
      name: 'Ordinateur',
      isActive: false
    }
  ];

  switchOn(i : number) {
    this.appareils[i].isActive = true;
  }

  switchOff(i: number) {
    this.appareils[i].isActive = false;
  }
}

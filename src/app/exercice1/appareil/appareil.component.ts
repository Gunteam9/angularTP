import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() isActive: boolean = false;
  @Input() index: number = 0;

  constructor(private appareilService: AppareilService) {  }

  ngOnInit(): void {
  }

  switch() {
    if(this.isActive)
      this.appareilService.switchOff(this.index);
    else
      this.appareilService.switchOn(this.index);
  }

  getStatus(): string {
    return this.isActive ? 'Allumé' : 'Eteint';
  }

  getColor(): string {
    return this.isActive ? 'green' : 'red';
  }
}

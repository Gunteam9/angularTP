import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-generator4',
  templateUrl: './card-generator4.component.html',
  styleUrls: ['./card-generator4.component.css']
})
export class CardGenerator4Component implements OnInit {
  @Input() title: string = '';
  @Input() imgLink: string = '';
  @Input() desc: string = '';

  constructor() {
    this.title = this.makeid(20);
    this.imgLink = this.makeid(20);
    this.desc = this.makeid(100);
  }

  ngOnInit(): void {
  }

  public makeAlter(): void {
    alert(this.makeid(10));
  }

  private makeid(length: number): string {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

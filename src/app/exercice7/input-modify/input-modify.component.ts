import {Component, Input, OnInit} from '@angular/core';
import {OtherService} from '../../services/other.service';

@Component({
  selector: '[app-input-modify]',
  templateUrl: './input-modify.component.html',
  styleUrls: ['./input-modify.component.css']
})
export class InputModifyComponent implements OnInit {

  @Input() index: number = 0;
  name: string = '';
  editName: string = '';

  enableEdit: boolean = false;

  constructor(private otherService: OtherService) { }

  ngOnInit(): void {
    this.name = this.otherService.exercice7Data[this.index];
  }

  onEnableEdit(): void {
    this.enableEdit = true;
  }

  onEndEdit(): void {
    this.enableEdit = false;
    this.otherService.editItemExo7(this.index, this.name);
  }

}

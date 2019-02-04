import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IconPickerModalComponent } from '../icon-picker-modal/icon-picker-modal.component';

@Component({
  selector: 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.css']
})
export class IconPickerComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  @Input() label;
  @Input() cssClass;
  @Input() iconName;
  @Output() iconNameChanged = new EventEmitter();

  openModal() {
    const initialState = {
      title: 'Bennett Jones Icon Picker'
    };
    this.bsModalRef = this.modalService.show(IconPickerModalComponent, {
      initialState,
      class: 'modal-lg'
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {}

  get getClasses() {
    return this.cssClass || 'btn-link';
  }
}

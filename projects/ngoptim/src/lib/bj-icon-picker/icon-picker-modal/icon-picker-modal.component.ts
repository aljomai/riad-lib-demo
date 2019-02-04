import { Component, OnInit, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { far, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { IconPickerService } from './icon-picker.service';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-icon-picker-modal',
  templateUrl: './icon-picker-modal.component.html',
  styleUrls: ['./icon-picker-modal.component.css'],
  providers: [IconPickerService]
})
export class IconPickerModalComponent implements OnInit {
  title: string;
  closeBtnName: string;

  farRegular: Observable<IconDefinition[]>;

  constructor(
    public bsModalRef: BsModalRef,
    private iconPickerService: IconPickerService
  ) {}

  ngOnInit() {
    this.farRegular = this.iconPickerService.farRegular;
  }

  search(term: string) {
    this.iconPickerService.search(term);
  }

  clicked(icon) {
    this.bsModalRef.hide();
  }
}

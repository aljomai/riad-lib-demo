import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { IconPickerModalComponent } from './icon-picker-modal/icon-picker-modal.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    IconPickerComponent,
    IconPickerModalComponent,
    FormSearchComponent
  ],
  entryComponents: [IconPickerModalComponent],
  exports: [IconPickerComponent, IconPickerModalComponent]
})
export class BJIconPickerModule {}

import { NgModule } from '@angular/core';
import { NgoptimComponent } from './ngoptim.component';
import { BJIconPickerModule } from './bj-icon-picker/bj-icon-picker.module';

@NgModule({
  declarations: [NgoptimComponent],
  imports: [BJIconPickerModule],
  exports: [NgoptimComponent, BJIconPickerModule]
})
export class NgoptimModule {}

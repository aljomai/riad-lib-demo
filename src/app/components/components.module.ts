import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconPickerTestComponent } from './icon-picker-test/icon-picker-test.component';
import { BJIconPickerModule } from 'projects/ngoptim/src/public_api';
import { ModalModule } from 'ngx-bootstrap/modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
const routes: Routes = [
  { path: 'icon-picker', component: IconPickerTestComponent }
];

@NgModule({
  declarations: [IconPickerTestComponent],
  imports: [
    CommonModule,
    BJIconPickerModule,
    ModalModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule {
  constructor() {
    library.add(far);
  }
}

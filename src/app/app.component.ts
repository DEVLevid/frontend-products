import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NzLayoutModule,
    ProductListComponent,
    ProductFormComponent,
  ]
})
export class AppComponent {
  showForm = false;

  onCreate() {
    this.showForm = true;
  }

  onFormSaved() {
    this.showForm = false;
  }

  onCancel() {
    this.showForm = false;
  }
}

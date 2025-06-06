import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService, NzMessageModule } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzInputNumberModule,
    NzMessageModule,
    NzGridModule,
  ],
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  productId?: number;
  isLoading = false;
  product?: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private message: NzMessageService,
    private modalRef: NzModalRef
  ) {
    this.product = this.modalRef.getConfig().nzData;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
    });

    if (this.product) {
      this.isEdit = true;
      this.productId = this.product.id;
      this.form.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.message.warning('Preencha todos os campos obrigatórios!');
      return;
    }

    this.isLoading = true;

    const product: Product = {
      ...this.form.value,
      id: this.productId,
      registerDate: this.product?.registerDate || new Date().toISOString()
    };

    const obs = this.isEdit && this.productId != null
      ? this.productService.update(this.productId, product)
      : this.productService.create(product);

    obs.subscribe({
      next: () => {
        this.message.success(`Produto ${this.isEdit ? 'atualizado' : 'cadastrado'} com sucesso!`);
        this.modalRef.close(true);
        this.isLoading = false;
      },
      error: () => {
        this.message.error('Erro ao salvar o produto.');
        this.isLoading = false;
      },
    });
  }

  onCancel(): void {
    this.modalRef.close();
  }
}

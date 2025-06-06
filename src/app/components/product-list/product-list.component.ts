import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService, NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzMessageModule,
    NzModalModule,
    NzIconModule,
    NzPaginationModule,
    ProductFormComponent,
  ],
})
export class ProductListComponent implements OnInit {
  @Output() create = new EventEmitter<void>();

  products: Product[] = [];
  displayProducts: Product[] = [];
  loading = false;
  pageSize = 5;
  pageIndex = 1;
  total = 0;

  constructor(
    private productService: ProductService,
    private message: NzMessageService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.total = data.length;
        this.updateDisplayProducts();
        this.loading = false;
      },
      error: () => {
        this.message.error('Erro ao carregar produtos.');
        this.loading = false;
      },
    });
  }

  updateDisplayProducts(): void {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayProducts = this.products.slice(startIndex, endIndex);
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.updateDisplayProducts();
  }

  onCreateClick(): void {
    this.openProductModal();
  }

  edit(product: Product): void {
    this.openProductModal(product);
  }

  openProductModal(product?: Product): void {
    const modalRef = this.modal.create({
      nzTitle: product ? 'Editar Produto' : 'Novo Produto',
      nzContent: ProductFormComponent,
      nzWidth: '600px',
      nzData: product,
      nzFooter: null,
      nzClosable: true,
      nzMaskClosable: false
    });

    modalRef.afterClose.subscribe(result => {
      if (result) {
        this.loadProducts();
      }
    });
  }

  delete(id: number | undefined): void {
    if (!id) return;
    this.modal.confirm({
      nzTitle: 'Deseja excluir este produto?',
      nzContent: 'Esta ação não poderá ser desfeita.',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.productService.delete(id).subscribe({
          next: () => {
            this.message.success('Produto removido com sucesso.');
            this.loadProducts();
          },
          error: () => {
            this.message.error('Erro ao remover produto.');
          },
        });
      },
      nzCancelText: 'Não'
    });
  }
}

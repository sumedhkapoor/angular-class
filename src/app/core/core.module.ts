import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductSearchPipe } from './product-search.pipe';



@NgModule({
  declarations: [
    InvoiceComponent,
    ProductSearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [InvoiceComponent, ProductSearchPipe]
})
export class CoreModule { }

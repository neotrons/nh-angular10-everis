import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { BookTableComponent } from './components/book-table/book-table.component';
import { BookCreateEditFormComponent } from './components/book-create-edit-form/book-create-edit-form.component';


@NgModule({
  declarations: [BookListPageComponent, BookCreatePageComponent, BookTableComponent, BookCreateEditFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ButtonModule,
    PanelModule,
  ],
})
export class AdminModule { }

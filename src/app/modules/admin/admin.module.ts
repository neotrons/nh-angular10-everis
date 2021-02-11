import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';

import { BookTableComponent } from './components/book-table/book-table.component';
import { BookCreateEditFormComponent } from './components/book-create-edit-form/book-create-edit-form.component';
import { BookEditPageComponent } from './pages/book-edit-page/book-edit-page.component';

import { SharedModule as PrimeShareModule} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [BookListPageComponent, BookCreatePageComponent, BookTableComponent, BookCreateEditFormComponent, BookEditPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeShareModule,
    TableModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
  ],
})
export class AdminModule { }

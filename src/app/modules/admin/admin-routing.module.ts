import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { AuthorizatedGuard } from 'src/app/shared/guards/authorizated.guard';
import { BookEditPageComponent } from './pages/book-edit-page/book-edit-page.component';

const routes: Routes = [
  {
    path: 'books',
    // canActivateChild: [],
    children: [
      {
        path: '',
        canActivate: [AuthorizatedGuard],
        component: BookListPageComponent
      },
      {
        path: 'add',
        canActivate: [AuthorizatedGuard],
        component: BookCreatePageComponent
      },
      {
        path: 'edit/:id',
        canActivate: [AuthorizatedGuard],
        component: BookEditPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

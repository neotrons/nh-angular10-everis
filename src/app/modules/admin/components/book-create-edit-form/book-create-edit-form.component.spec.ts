import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateEditFormComponent } from './book-create-edit-form.component';

describe('BookCreateEditFormComponent', () => {
  let component: BookCreateEditFormComponent;
  let fixture: ComponentFixture<BookCreateEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCreateEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

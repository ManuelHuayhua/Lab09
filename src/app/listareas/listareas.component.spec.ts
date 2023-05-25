import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareasComponent } from './listareas.component';

describe('ListareasComponent', () => {
  let component: ListareasComponent;
  let fixture: ComponentFixture<ListareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListareasComponent]
    });
    fixture = TestBed.createComponent(ListareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

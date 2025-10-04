import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTermosServicoComponent } from './pg-termos-servico.component';

describe('PgTermosServicoComponent', () => {
  let component: PgTermosServicoComponent;
  let fixture: ComponentFixture<PgTermosServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgTermosServicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgTermosServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSegurancaComponent } from './pg-seguranca.component';

describe('PgSegurancaComponent', () => {
  let component: PgSegurancaComponent;
  let fixture: ComponentFixture<PgSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgSegurancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

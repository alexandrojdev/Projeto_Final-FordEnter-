import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEsqueciSenhaComponent } from './pg-esqueci-senha.component';

describe('PgEsqueciSenhaComponent', () => {
  let component: PgEsqueciSenhaComponent;
  let fixture: ComponentFixture<PgEsqueciSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgEsqueciSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgEsqueciSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

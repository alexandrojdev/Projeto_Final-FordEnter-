import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgUsuarioComponent } from './pg-usuario.component';

describe('PgUsuarioComponent', () => {
  let component: PgUsuarioComponent;
  let fixture: ComponentFixture<PgUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

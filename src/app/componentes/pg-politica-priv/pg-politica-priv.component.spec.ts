import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPoliticaPrivComponent } from './pg-politica-priv.component';

describe('PgPoliticaPrivComponent', () => {
  let component: PgPoliticaPrivComponent;
  let fixture: ComponentFixture<PgPoliticaPrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgPoliticaPrivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPoliticaPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

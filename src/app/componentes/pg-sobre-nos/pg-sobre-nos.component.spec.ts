import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSobreNosComponent } from './pg-sobre-nos.component';

describe('PgSobreNosComponent', () => {
  let component: PgSobreNosComponent;
  let fixture: ComponentFixture<PgSobreNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgSobreNosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgSobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

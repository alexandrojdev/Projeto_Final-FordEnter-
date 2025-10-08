import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEstabelecimentosComponent } from './pg-estabelecimentos.component';

describe('PgEstabelecimentosComponent', () => {
  let component: PgEstabelecimentosComponent;
  let fixture: ComponentFixture<PgEstabelecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgEstabelecimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

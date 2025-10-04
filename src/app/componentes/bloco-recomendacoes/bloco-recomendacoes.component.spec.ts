import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoRecomendacoesComponent } from './bloco-recomendacoes.component';

describe('BlocoRecomendacoesComponent', () => {
  let component: BlocoRecomendacoesComponent;
  let fixture: ComponentFixture<BlocoRecomendacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoRecomendacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoRecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

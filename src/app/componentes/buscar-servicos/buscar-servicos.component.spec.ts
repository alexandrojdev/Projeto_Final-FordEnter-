import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarServicosComponent } from './buscar-servicos.component';

describe('BuscarServicosComponent', () => {
  let component: BuscarServicosComponent;
  let fixture: ComponentFixture<BuscarServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
